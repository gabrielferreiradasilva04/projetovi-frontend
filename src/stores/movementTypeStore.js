import { api } from "@/services/axiosConfig";
import { defineStore } from "pinia";

export const useMovementTypeStore = defineStore('movementType', {
    state: () => ({
        movementsType: [],
        currentMovement: null,
        snackbarConfig: {
            time: 0,
            message: '',
            color: ''
        },
    }),
    actions: {
        async findAll() {
            const request = await api.get('/movementTypes', { withCredentials: true });
            if (request.status === 200) {
                this.movementsType = request.data;
            } else {
                this.movements = [];
                this.snackbarConfig = {
                    message: 'Erro ao buscar os tipos de movimentos',
                    color: 'error',
                    time: 20000
                };
            }
        }
    }
})