<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" color="primary">
            <v-list>
                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.png" subtitle="john@google.com"
                    title="Gabriel Silva">
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
            </v-list>
            <!--  -->
        </v-navigation-drawer>

        <v-app-bar color="primary">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-app-bar-title>e-stoquei</v-app-bar-title>
            <v-btn>
                <v-icon size="large" @click="toggleTheme">
                    mdi-theme-light-dark
                </v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <RouterView />
        </v-main>
    </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';


const drawer = ref(null)

const items = [
    { text: 'Dashboard', icon: 'mdi-view-dashboard', to: "/home" },
    { text: 'Produtos', icon: 'mdi-sitemap-outline', to: "/products" },
    { text: 'Orçamentos', icon: 'mdi-currency-usd', to: "/budget" },
    { text: 'Movimentações', icon: 'mdi-swap-horizontal', to: "/movements" }
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