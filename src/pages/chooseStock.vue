<template>
    <h1>Selecione um Estoque</h1>

    <v-data-iterator :items="store.userStocks" :items-per-page="3" :search="search">
        <template v-slot:header>
            <v-toolbar :color="colors.deepPurple.darken1" flat class="pa-3" rounded>
                <v-text-field v-model="search" label="Pesquisar" prepend-inner-icon="mdi-magnify" variant="outlined"
                    hide-details single-line></v-text-field>

                <v-divider class="mx-4" inset vertical></v-divider>

                <v-btn variant="tonal" @click="toogleStockDialog">
                    Adicionar
                </v-btn>

            </v-toolbar>
        </template>

        <template v-slot:default="{ items }">


            <v-container transition="fade-transition" class="pa-2" fluid>
                <v-row dense>
                    <v-col v-for="item in items" :key="item.raw.title" cols="auto" md="4">
                        <v-card border hover min-width="300">
                            <v-img src="/public/estoque.jpg"></v-img>
                            <v-card-title>{{ item.raw.title }}</v-card-title>
                            <v-card-text class="ga-2">
                                <p>{{ item.raw.description }}</p>
                                <p>Endereço: {{ item.raw.address }}</p>
                                <p>Contato: {{ item.raw.contact }}</p>
                                <p>Capacidade Total: {{ item.raw.totalCapacity }}</p>
                                <p>Lotação atual:</p>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions class="ga-0">
                                <v-btn @click="toogleStockDialog(item.raw)" v-tooltip:bottom="'Editar'">
                                    <v-icon size="large">mdi-pencil</v-icon>
                                </v-btn>
                                <v-divider vertical></v-divider>
                                <v-btn v-tooltip:bottom="'Deletar'">
                                    <v-icon size="large">mdi-delete</v-icon>
                                </v-btn>
                                <v-divider vertical></v-divider>
                                <v-btn @click="selectStock(item.raw)" v-tooltip:bottom="'Selecionar'" class="mx-2">
                                    <v-icon>mdi-arrow-collapse-right</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </template>
        <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
            <div class="d-flex align-center justify-center pa-4">
                <v-btn :disabled="page === 1" density="comfortable" icon="mdi-arrow-left" variant="tonal" rounded
                    @click="prevPage"></v-btn>

                <div class="mx-2 text-caption">
                    Page {{ page }} of {{ pageCount }}
                </div>

                <v-btn :disabled="page >= pageCount" density="comfortable" icon="mdi-arrow-right" variant="tonal"
                    rounded @click="nextPage"></v-btn>
            </div>
        </template>

    </v-data-iterator>
    <v-container class="d-flex align-center justify-center" v-if="store.userStocks.length === 0">
        <v-card variant="text" class="text-center">
            <v-card-title>
                <v-img src="/public/emptybox.svg" width="300"></v-img>

            </v-card-title>
            <v-card-subtitle>
                Ops, nada por aqui...
            </v-card-subtitle>
        </v-card>
    </v-container>
    <RegisterSotckDialog :edit-mode="editMode" :stock="selectedStock" :dialog="showStockDialog"
        @toogle="toogleStockDialog" />

</template>

<script setup>
import colors from 'vuetify/util/colors'
import { onMounted, onUnmounted, ref } from 'vue'
import { useStockStore } from '@/stores/stockStore';
import RegisterSotckDialog from '@/components/dialogs/registerSotckDialog.vue';
import { useRouter } from "vue-router";

const router = useRouter();
const search = ref('');
const showStockDialog = ref(false);
const selectedStock = ref({
    id: '',
    title: '',
    description: '',
    address: '',
    contact: '',
    totalCapacity: 0
})
const store = useStockStore();
const editMode = ref(false);

const toogleStockDialog = (stock) => {
    if (stock != null) {
        selectedStock.value = stock;
        editMode.value = true;
    } else {
        selectedStock.value = {};
        editMode.value = false;
    }
    showStockDialog.value = !showStockDialog.value
}

onMounted(() => {
    store.getAuthenticatedUserStocks();
})
onUnmounted(() => {
    selectedStock.value = {}
})

const selectStock = (stock) => {
    if (stock != null) {
        store.currentStock = stock;
        router.push('/loadingHome')
    }
}


</script>