<template>
    <v-navigation-drawer app fixed v-model="drawer" rail color="secondary">
        <v-list>
            <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.png" subtitle="gabriel_silva@outlook.com"
                title="Gabriel Silva">
            </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav>
            <RouterLink v-for="(item, i) in items" :key="i" :to="item.to" @click="updateTitle(item.text)">

                <v-list-item :value="item" v-tooltip:end="item.text">
                    <template v-slot:prepend>
                        <v-icon :icon="item.icon"></v-icon>
                    </template>

                    <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
            </RouterLink>
            <br>
            <v-divider></v-divider>
            <v-list-item v-tooltip:end="'logoff'" class="d-flex justify-center" to="/login">
                <v-icon>
                    mdi-door-open
                </v-icon>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar color="primary" :elevation="0" app fixed density="compact">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-app-bar-title>{{ selected_option }}</v-app-bar-title>
        <v-btn>
            <v-icon size="large" @click="toggleTheme" v-tooltip="'mudar tema'">
                = mdi-theme-light-dark
            </v-icon>
        </v-btn>
    </v-app-bar>
    <v-container min-height="100vh" min-width="98vw">
        <RouterView />
    </v-container>

</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';


const drawer = ref(null)

const items = [
    { text: 'Dashboard', icon: 'mdi-google-analytics', to: "/home" },
    { text: 'Produtos', icon: 'mdi-sitemap', to: "/products" },
    { text: 'Categorias', icon: 'mdi-diversify', to: "/category" },
    { text: 'Orçamentos', icon: 'mdi-currency-usd', to: "/estimate" },
    { text: 'Movimentações', icon: 'mdi-swap-horizontal', to: "/movements" },
    { text: 'Clientes', icon: 'mdi-account-group', to: "/clients" },
    { text: 'Fornecedores', icon: 'mdi-shopping', to: "/suppliers" },

    { text: 'Depósitos', icon: 'mdi-package', to: "/deposit" },
    { text: 'Localizações', icon: 'mdi-map-marker-check', to: "/location" },
    { text: 'Perfil', icon: 'mdi-account', to: "/profile" },

]

const selected_option = ref('Olá')
const updateTitle = (newTitle) => {
    selected_option.value = newTitle;
}
const theme = useTheme();

const isDark = ref(false);

const toggleTheme = () => {
    isDark.value = !isDark.value;
    const newTheme = isDark.value ? 'dark' : 'light';
    theme.global.name.value = newTheme; // Atualiza o tema globalmente
};
</script>

<style>
a {
    text-decoration: none;
    color: black;
}

.v-navigation-drawer__content::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #5d5d5d;
    background-color: #5d5d5d;
}

.v-navigation-drawer__content::-webkit-scrollbar {
    width: 0px;
}

.v-navigation-drawer__content::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px #424242;
    background-color: #424242;
}
</style>