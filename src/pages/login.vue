<template>
        <v-img class="mx-auto my-6" max-width="228" src="/public/icone_secundario_semfundo.png"></v-img>
    <v-card class="mx-auto pa-12 pb-8" elevation="12" max-width="448" rounded="lg">
        <div class="text-subtitle-1 text-medium-emphasis">Conta</div>

        <v-text-field density="compact" placeholder="E-mail" prepend-inner-icon="mdi-email-outline"
            variant="outlined"></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
            Senha

            <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">
                Esqueci minha senha</a>
        </div>

        <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
            density="compact" placeholder="Senha" prepend-inner-icon="mdi-lock-outline" variant="outlined"
            @click:append-inner="visible = !visible"></v-text-field>

        <v-card class="mb-12" color="warning" variant="tonal">
            <v-card-text class="text-medium-emphasis text-caption">
                Atenção: após 3 tentativas incorretas sua conta será temporariamente bloqueada.
            </v-card-text>
        </v-card>

        <v-btn class="mb-8" color="primary" size="large" variant="tonal" block>
            Entrar
        </v-btn>

        <v-card-text class="text-center">
            <a class="text-blue text-decoration-none" href="/register"   rel="noopener noreferrer" target="_self">
                Criar uma conta <v-icon icon="mdi-chevron-right"></v-icon>
            </a>
        </v-card-text>
    </v-card>
</template>

<script setup>
import { ref } from 'vue';
const visible = ref(false)

</script>

<style scoped></style>