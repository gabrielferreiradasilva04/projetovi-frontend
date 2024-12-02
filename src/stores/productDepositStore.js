import { api } from "@/services/axiosConfig";
import { defineStore } from "pinia";
import { useStockStore } from "./stockStore";

export const useProductDepositStore = defineStore('productDeposit', {
    state: () => ({
        productDeposits: [],
        snackbarConfig: {
            time: 0,
            message: '',
            color: ''
        },
    }),
    persist: {
        enabled: true
    },
    actions: {
        setSnackBarMessage(message) {
            this.snackbarConfig.message = message;
        },
        clearSnackBarMessage() {
            this.snackbarConfig.message = '';
        },
        async save(productDeposit) {

            if (productDeposit === null) {
                this.snackbarConfig = {
                    message: 'Objeto inválido',
                    color: 'error',
                    time: 20000
                };
                return;
            }
            if (productDeposit) {
                try {
                    const productDepositData = {
                        quantity: productDeposit.quantity,
                        minimumStock: productDeposit.minimumStock,
                        product: productDeposit.product,
                        deposit: productDeposit.deposit,
                        registrationDate: productDeposit.registrationDate,
                        updateDate: productDeposit.updateDate
                    };
                    const request = await api.post('/productDeposits', productDepositData, { withCredentials: true });

                    if (request.status === 200) {
                        this.snackbarConfig = {
                            message: 'Salvo com sucesso',
                            color: 'success',
                            time: 2000
                        };
                        this.productStocks.push(request.data);
                    } else {
                        this.snackbarConfig = {
                            message: 'Vinculo incorreto',
                            color: 'warning',
                            time: 2000
                        };
                    }
                } catch (error) {
                    /* if (error.response) {
                         if (error.response.data.message) {
                             this.snackbarConfig = {
                                 message: error.response.data.message,
                                 color: 'error',
                                 time: 2000
                             };
                         } else {
                             this.snackbarConfig = {
                                 message: 'Erro desconhecido. Tente novamente mais tarde',
                                 color: 'error',
                                 time: 2000
                             };
                         }
 
                     } else {
                         this.snackbarConfig = {
                             message: 'Erro desconhecido. Tente novamente mais tarde',
                             color: 'error',
                             time: 2000
                         };
                     }*/
                }

            }
        },
        async findAll() {
            const stockStore = useStockStore();
            const stockId = stockStore.currentStock.id;
            const request = await api.get('/productDeposits/' + stockId, { withCredentials: true });

            if (request.status === 200) {
                this.productDeposits = request.data;
            }
        }
    }
})