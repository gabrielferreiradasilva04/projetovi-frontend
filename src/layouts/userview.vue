<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" color="primary">
            <v-list>
                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
                    subtitle="gabriel_silva@outlook.com" title="Gabriel Silva">
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list nav>
                <RouterLink v-for="(item, i) in items" :key="i" :to="item.to">

                    <v-list-item :value="item">
                        <template v-slot:prepend>
                            <v-icon :icon="item.icon"></v-icon>
                        </template>

                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item>
                </RouterLink>
                <br>
                <v-divider></v-divider>
                <div class="pa-2">
                    <v-list-item v-tooltip:end="'logoff'" prepend-avatar="/public/icone_secundario_semfundo.png"
                        class="d-flex justify-center" to="/login" variant="tonal">
                    </v-list-item>
                </div>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar color="primary">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-app-bar-title>Meu estoque 001</v-app-bar-title>
            <v-btn>
                <v-icon size="large" @click="toggleTheme" v-tooltip="'mudar tema'">
                    = mdi-theme-light-dark
                </v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <v-container class="pa-4" min-height="100vh">
                <RouterView />
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';


const drawer = ref(null)

const items = [
    { text: 'Dashboard', icon: 'mdi-google-analytics', to: "/home" },
    { text: 'Produtos', icon: 'mdi-sitemap', to: "/products" },
    { text: 'Orçamentos', icon: 'mdi-currency-usd', to: "/estimate" },
    { text: 'Movimentações', icon: 'mdi-swap-horizontal', to: "/movements" },
    { text: 'Clientes', icon: 'mdi-account-group', to: "/clients" },
    { text: 'Fornecedores', icon: 'mdi-shopping', to: "/suppliers" },
    { text: 'Perfil', icon: 'mdi-account', to: "/profile" }
]

const theme = useTheme();

const isDark = ref(false);

const toggleTheme = () => {
    isDark.value = !isDark.value;
    const newTheme = isDark.value ? 'dark' : 'light';
    theme.global.name.value = newTheme; // Atualiza o tema globalmente
};
</script>

<style scoped>
a {
    text-decoration: none;
    color: white;
}
</style>