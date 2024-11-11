import { defineStore } from "pinia";
import { api } from "@/services/axiosConfig";
import { withCtx } from "vue";

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
        async getAuthenticatedUserStocks() {
            this.snackbarConfig.color = '';
            this.snackbarConfig.time = 0;
            this.snackbarConfig.message = '';
            try {
                const id = localStorage.getItem('userId');
                const request = await api.get('/users/stocks/' + id.toString(), { withCredentials: true })
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
                    }
                } else {
                    this.snackbarConfig = {
                        message: 'Estoque Inválido',
                        time: 2000,
                        color: 'error'
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
