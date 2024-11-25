import { defineStore } from "pinia";
import { api } from "@/services/axiosConfig";
import { useStockStore } from "./stockStore";

export const useDepositStore = defineStore('deposit', {
    state: () => ({
        deposits: [],
        snackbarConfig: {
            time: 0,
            color: '',
            message: ''
        },
        headers: [
            { title: 'Title', key: 'title' },
            { title: 'Description', key: 'description' },
            { title: 'Registration Date', key: 'registrationDate' },
            { title: 'Ações', key: 'actions', sortable: false },
        ]
    }),
    actions: {
        async listAll() {
            const stockStore = useStockStore();

            const currentStock = stockStore.currentStock;
            var stockId = currentStock.id;

            const request = await api.get('/deposits/' + stockId, { withCredentials: true });

            if (request.status === 200) {
                const depositsRequest = request.data
                this.deposits = depositsRequest;
            } else {
                this.snackbarConfig = {
                    time: 2000,
                    color: 'warning',
                    message: 'Algo deu errado, tente novamente mais tarde...'
                }
            }
        }
    }
})