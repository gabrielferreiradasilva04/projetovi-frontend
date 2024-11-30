import { defineStore } from "pinia";
import { api } from "@/services/axiosConfig";
import { useStockStore } from "./stockStore";

export const useBrandStore = defineStore('brand', {
    state: () => ({
        brands: [],
        snackbarConfig: {
            time: 0,
            color: '',
            message: ''
        },
        headers: [
            { title: 'Descrição', key: 'description' },
            { title: 'Ações', key: 'actions', sortable: false, align: 'end' },
        ]
    }),
    actions: {
        async listAll() {
            const stockStore = useStockStore();

            const stock = stockStore.currentStock;
            var stockId = stock.id;

            const request = await api.get('/brands/' + stockId, { withCredentials: true });

            if (request.status === 200) {
                const brandsRequest = request.data
                this.brands = brandsRequest;
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