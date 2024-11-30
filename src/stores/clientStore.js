import { defineStore } from "pinia";
import { api } from "@/services/axiosConfig";


export const useClientStore = defineStore('client', {
    state: () => ({
        clients: [],
        snackbarConfig: {
            time: 0,
            color: '',
            message: ''
        },
        headers: [
            { title: 'Nome', key: 'firstName' },
            { title: 'Telefone', key: 'phoneNumber' },
            { title: 'Email', key: 'email' },
            { title: 'Ativo', key: 'active' },
            { title: 'Ações', key: 'actions', sortable: false, align: 'center' },]
    }),
    actions: {
        async listAll() {
            const request = await api.get('/clients', { withCredentials: true });

            if (request.status === 200) {
                const clientsRquest = request.data
                this.clients = clientsRquest;
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