import { defineStore } from "pinia";
import { api } from "@/services/axiosConfig";


export const useUnitMeasureStore = defineStore('unitMeasure', {
    state: () => ({
        unitMeasures: [],
        snackbarConfig: {
            time: 0,
            color: '',
            message: ''
        },
        headers: [
            { title: 'Title', key: 'title' },
            { title: 'Description', key: 'description' },
            { title: 'Ações', key: 'actions', sortable: false, align: 'end' },
        ]
    }),
    actions: {
        async listAll() {
            const request = await api.get('/unitMeasures', { withCredentials: true });

            if (request.status === 200) {
                const unitMeasures = request.data
                this.unitMeasures = unitMeasures;
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