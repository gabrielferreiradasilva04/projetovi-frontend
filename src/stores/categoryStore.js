import { defineStore } from "pinia";
import { api } from "@/services/axiosConfig";

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: [],
        snackbarConfig: {
            time: 0,
            color: '',
            message: ''
        }
    }),
    actions: {
        async listAll() {
            const request =  await api.get('/categories', { withCredentials: true });

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