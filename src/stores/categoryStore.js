import { defineStore } from "pinia";
import { api } from "@/services/axiosConfig";
import { useStockStore } from "./stockStore";

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: [],
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

            const request = await api.get('/categories/' + stockId, { withCredentials: true });

            if (request.status === 200) {
                const categoriesRequest = request.data
                this.categories = categoriesRequest;
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