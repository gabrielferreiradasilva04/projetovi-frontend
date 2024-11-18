import { defineStore } from "pinia";
import { api } from "@/services/axiosConfig";


export const useAuthStore = defineStore('auth', {
    state: () => ({

        token: '',
        user: null,
        errorMessage: '',
        isAuthenticated: false
    }),
    actions: {
        async login(email, password) {
            if (email === '' || password === '') {
                this.errorMessage = 'Preencha todos os campos';
                return;
            }
            this.errorMessage = '';
            try {
                const request = await api.post('/auth/login', {
                    email, password
                }, { withCredentials: true })

                const responseUser = request.data;

                this.user = responseUser;

                this.isAuthenticated = true;

            } catch (error) {
                if (error.response) {
                    if (error.response.status === 403) {
                        this.errorMessage = 'Login ou senha inválidos';
                        this.isAuthenticated = false;
                        return;
                    }
                } else {
                    this.errorMessage = 'Erro desconhecido'
                    this.isAuthenticated = false;
                    console.log(error);
                    return;
                }
                console.log(error);
                this.errorMessage = error.response.data.message;
                this.isAuthenticated = false;
            }
        },

        logout() {
            this.isAuthenticated = false;
        }
    }
});