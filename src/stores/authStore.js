import { defineStore } from "pinia";
import { api } from "@/services/axiosConfig";
import { errorMessages } from "vue/compiler-sfc";

export const useAuthStore = defineStore('auth', {
    state: () => ({

        token: '',
        user: null,
        errorMessage: ''
    }),
    actions: {
        async login(email, password) {
            const request = await api.post('/auth/login', {
                email, password
            }, { withCredentials: true })
                .then(function (response) {
                    console.log("login")
                }).catch(error => {
                    this.errorMessage = error.response.data.message;
                    console.log(error.response.data.message)
                    alert(this.errorMessage);
                })
        }
    }
});