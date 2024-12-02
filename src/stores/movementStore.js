import { api } from "@/services/axiosConfig";
import { defineStore } from "pinia";
import { useStockStore } from "./stockStore";

export const useMovementStore = defineStore('movement', {
    state: () => ({
        currentMovement: null,
        movements: [],
        snackbarConfig: {
            time: 0,
            message: '',
            color: ''
        },
        headers: [
            { title: 'Produto', key: 'productDeposit.product.code' },
            { title: 'Deposito', key: 'productDeposit.deposit.title' },
            { title: 'Valor Total', key: 'total' },
            { title: 'Data Mov', key: 'date' },
            { title: 'Tipo Movimento', key: 'movementType.title' },
            { title: 'Ações', key: 'actions', sortable: false, align: 'center' },
        ]
    }),
    actions: {
        setSnackBarMessage(message) {
            this.snackbarConfig.message = message;
        },
        clearSnackBarMessage() {
            this.snackbarConfig.message = '';
        },
        async listAll() {
            const stockStore = useStockStore();
            const stockId = stockStore.currentStock.id;
            const request = await api.get('/movements/' + stockId, { withCredentials: true });

            if (request.status === 200) {
                this.movements = request.data;
            } else {
                this.movements = [];
                this.snackbarConfig = {
                    message: 'Erro ao buscar os movimentos',
                    color: 'error',
                    time: 20000
                };
            }
        },
        async save(movement) {
            if (movement.quantity < 0) {
                this.snackbarConfig = {
                    message: 'Insira um quantidade diferente de 0 (zero)',
                    color: 'warning',
                    time: 20000
                };
                return;
            }
            if (movement) {
                try {
                    const movementData = {
                        productDeposit: movement.productDeposit,
                        observation: movement.observation,
                        quantity: movement.quantity,
                        date: movement.date,
                        movementType: movement.movementType,
                        total: movement.total,
                        invoice: movement.invoice
                    }

                    const request = await api.post('/movements', movementData, { withCredentials: true });

                    if (request.status === 200) {
                        this.snackbarConfig = {
                            message: 'Movimento realizado com sucesso!',
                            color: 'success',
                            time: 20000
                        };
                        this.movements.push(request.data)
                    }
                } catch (error) {
                    if (error) {
                        if (error.response.data.message) {
                            this.snackbarConfig = {
                                message: error.response.data.message,
                                color: 'warning',
                                time: 20000
                            };
                        } else {
                            this.snackbarConfig = {
                                message: 'Erro desconhecido',
                                color: 'error',
                                time: 20000
                            };
                        }
                    }
                }

            }
        }

    },


})