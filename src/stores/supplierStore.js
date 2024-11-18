import { defineStore } from "pinia";
import { api } from "@/services/axiosConfig";

export const useSupplierStore = defineStore('supplier', {
    state: () => ({
        currentSupplier: null,
        suppliers: [],
        snackbarConfig: {
            time: 0,
            color: '',
            message: ''
        },
        headers: [
            { title: 'Nome', key: 'name' },
            { title: 'Telefone', key: 'phoneNumber' },
            { title: 'Email', key: 'email' },
            { title: 'Ações', key: 'actions', sortable: false, align: 'end' },
        ]

    }),
    actions: {
        async listAll() {
            const request = await api.get('/suppliers',
                { withCredentials: true }
            );

            if (request.status === 200) {
                const suppliersRequest = request.data;
                this.suppliers = suppliersRequest;
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