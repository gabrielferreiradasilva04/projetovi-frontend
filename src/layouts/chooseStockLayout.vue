<template>
    <v-app-bar color="primary">
        <v-app-bar-title>Seja bem vindo, Gabriel Ferreira da Silva!</v-app-bar-title>
        <v-btn>
            <v-icon size="large" @click="toggleTheme" v-tooltip="'mudar tema'">mdi-theme-light-dark</v-icon>
        </v-btn>
    </v-app-bar>
    <v-main>
        <v-container class="pa-0" min-height="100vh">
            <RouterView />
        </v-container>
    </v-main>
</template>
<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();

const isDark = ref(false);

const toggleTheme = () => {
    isDark.value = !isDark.value;
    const newTheme = isDark.value ? 'dark' : 'light';
    theme.global.name.value = newTheme; // Atualiza o tema globalmente
};
</script>