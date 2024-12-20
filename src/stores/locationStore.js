import { defineStore } from "pinia";
import { api } from "@/services/axiosConfig";
import { useStockStore } from "./stockStore";


export const useLocationStore = defineStore('location', {
    state: () => ({
        locations: [],
        snackbarConfig: {
            time: 0,
            color: '',
            message: ''
        },
        headers: [
            { title: 'Title', key: 'title' },
            { title: 'Description', key: 'description' },
            { title: 'Ações', key: 'actions', sortable: false, align: 'center' },
        ]
    }),
    actions: {
        async listAll() {
            const stockStore = useStockStore();

            const currentStock = stockStore.currentStock;
            var stockId = currentStock.id;
            const request = await api.get('/locations/' + stockId, { withCredentials: true });

            if (request.status === 200) {
                const locationsRequest = request.data
                this.locations = locationsRequest;
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