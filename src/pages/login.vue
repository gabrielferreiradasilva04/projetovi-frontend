<template>
    <v-img class="mx-auto my-6" max-width="228" src="/public/icone_secundario_semfundo.png"></v-img>
    <v-form transition="fade-transition" v-on:submit.prevent="handleLogin">
        <v-card class="mx-auto pa-12 pb-8" elevation="12" max-width="448" rounded="lg">
            <div class="text-subtitle-1 text-medium-emphasis">Conta</div>

            <v-text-field v-model="email" density="compact" placeholder="E-mail" prepend-inner-icon="mdi-email-outline"
                variant="outlined"></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                Senha

                <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer"
                    target="_blank">
                    Esqueci minha senha</a>
            </div>

            <v-text-field v-model="password" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'" density="compact" placeholder="Senha"
                prepend-inner-icon="mdi-lock-outline" variant="outlined"
                @click:append-inner="visible = !visible"></v-text-field>

            <v-card class="mb-12" color="warning" variant="tonal">
                <v-card-text class="text-medium-emphasis text-caption">
                    Atenção: após 3 tentativas incorretas sua conta será temporariamente bloqueada.
                </v-card-text>
            </v-card>

            <v-divider class="ma-2"></v-divider>

            <v-btn type="submit" class="mb-8" color="primary" size="large" variant="tonal" block>
                Entrar
            </v-btn>

            <v-card-text class="text-center">
                <a class="text-blue text-decoration-none" href="/register" rel="noopener noreferrer" target="_self">
                    Criar uma conta <v-icon icon="mdi-chevron-right"></v-icon>
                </a>
            </v-card-text>
        </v-card>
    </v-form>

    <CustomSnackbar :time="2000" :message="authStore.errorMessage" :color="'error'" />


</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import CustomSnackbar from '@/components/customSnackbar.vue';
import { useRouter } from "vue-router";

const router = useRouter();
const visible = ref(false)
const email = ref('')
const password = ref('')

const authStore = useAuthStore();
async function handleLogin() {
    await authStore.login(email.value, password.value);
    if (authStore.isAuthenticated) {
        router.push('/loadingStocks')
    }
}
</script>


<style scoped></style>