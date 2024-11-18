import { defineStore } from "pinia";
import { useAuthStore } from "./authStore";
import { api } from "@/services/axiosConfig";

export const useStockStore = defineStore('stock', {
    state: () => ({
        currentStock: null,
        userStocks: [],
        snackbarConfig: {
            time: 0,
            color: '',
            message: ''
        }
    }),
    actions: {
        addStockOnUserStocks(stock) {
            this.userStocks.push(stock);
        },
        updateUserStocksAfterUpdateList(stock) {
            let oldStockIndex = this.userStocks.findIndex(item => item.id === stock.id);

            if (oldStockIndex != -1) {
                this.userStocks.splice(oldStockIndex, 1, stock);
            }
        },
        async getAuthenticatedUserStocks() {
            this.snackbarConfig.color = '';
            this.snackbarConfig.time = 0;
            this.snackbarConfig.message = '';

            const userStore = useAuthStore();

            try {
                const request = await api.get('/users/stocks/' + userStore.user.id, { withCredentials: true })
                this.userStocks = request.data;
            } catch (error) {
                if (error) {
                    if (error.response.status === 403) {
                        this.snackbarConfig = {
                            message: 'Não autorizado',
                            color: 'error',
                            time: 20000
                        }
                    } else {
                        this.snackbarConfig = {
                            message: error.response.data.message,
                            color: 'warning',
                            time: 20000
                        }
                    }
                } else {
                    this.snackbarConfig = {
                        message: 'Erro desconhecido',
                        color: 'warning',
                        time: 20000
                    }
                }
            }

        },
        async saveNewStock(stock) {
            this.snackbarConfig.color = '';
            this.snackbarConfig.time = 0;
            this.snackbarConfig.message = '';
            try {
                if (stock != null) {
                    const stockData = {
                        title: stock.title,
                        description: stock.description,
                        address: stock.address,
                        contact: stock.contact,
                        totalCapacity: stock.totalCapacity
                    }

                    const request = await api.post(
                        '/stocks',
                        stockData, { withCredentials: true }
                    );
                    if (request.status === 200) {
                        this.snackbarConfig = {
                            message: 'Salvo com sucesso',
                            time: 2000,
                            color: 'success'
                        }
                        this.addStockOnUserStocks(request.data);
                    } else {
                        this.snackbarConfig = {
                            message: 'Estoque Inválido',
                            time: 2000,
                            color: 'error'
                        }
                        console.log(request.data)
                    }
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status === 403) {
                        this.snackbarConfig = {
                            message: 'Não autorizado',
                            time: 2000,
                            color: 'error'
                        }
                    } else {
                        this.snackbarConfig = {
                            message: error.response.data.message,
                            time: 2000,
                            color: 'error'
                        }
                        console.log(error)
                    }
                } else {
                    this.snackbarConfig = {
                        message: 'Tente novamente mais tarde',
                        time: 2000,
                        color: 'warning'
                    }
                    console.log(error)
                }
            }
        },
        async updateStockFields(stock) {
            this.snackbarConfig.color = '';
            this.snackbarConfig.time = 0;
            this.snackbarConfig.message = '';
            try {
                if (stock == null) {
                    this.snackbarConfig = {
                        message: 'Estoque inexistente',
                        time: 2000,
                        color: 'warning'
                    }
                    return;
                }
                else if (stock.id === '') {
                    this.snackbarConfig = {
                        message: 'Estoque inexistente',
                        time: 2000,
                        color: 'warning'
                    }
                    return;
                }
                else {
                    const stockData = {
                        id: stock.id,
                        title: stock.title,
                        description: stock.description,
                        address: stock.address,
                        contact: stock.contact,
                        totalCapacity: stock.totalCapacity
                    }

                    const request = await api.put(
                        '/stocks/' + stockData.id,
                        stockData, { withCredentials: true }
                    );
                    if (request.status === 200) {
                        this.snackbarConfig = {
                            message: 'Atualizado com sucesso',
                            time: 2000,
                            color: 'success'
                        }
                        this.updateUserStocksAfterUpdateList(request.data);
                    } else {
                        this.snackbarConfig = {
                            message: 'Estoque Inválido',
                            time: 2000,
                            color: 'error'
                        }
                        console.log(request.data)
                    }
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status === 403) {
                        this.snackbarConfig = {
                            message: 'Não autorizado',
                            time: 2000,
                            color: 'error'
                        }
                    } else {
                        this.snackbarConfig = {
                            message: error.response.data.message,
                            time: 2000,
                            color: 'error'
                        }
                        console.log(error)
                    }
                } else {
                    this.snackbarConfig = {
                        message: 'Tente novamente mais tarde',
                        time: 2000,
                        color: 'warning'
                    }
                    console.log(error)
                }
            }
        }
    }
});
