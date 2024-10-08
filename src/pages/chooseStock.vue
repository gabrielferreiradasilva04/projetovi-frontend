<template>
    <h1>Selecione um Estoque</h1>
    <v-data-iterator :items="stocks" :items-per-page="9" :search="search">
        <template v-slot:header>
            <v-toolbar flat class="pa-3" rounded>
                <v-text-field v-model="search" label="Pesquisar" prepend-inner-icon="mdi-magnify" variant="outlined"
                    hide-details single-line></v-text-field>

                <v-divider class="mx-4" inset vertical></v-divider>

                <v-btn variant="tonal" @click="toogleStockDialog">
                    Adicionar
                </v-btn>

            </v-toolbar>
        </template>

        <template v-slot:default="{ items }">
            <v-container class="pa-2" fluid>
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
                                <v-btn v-tooltip:bottom="'Editar'">
                                    <v-icon size="large">mdi-pencil</v-icon>
                                </v-btn>
                                <v-divider vertical></v-divider>
                                <v-btn v-tooltip:bottom="'Deletar'">
                                    <v-icon size="large">mdi-delete</v-icon>
                                </v-btn>
                                <v-divider vertical></v-divider>
                                <v-btn v-tooltip:bottom="'Selecionar'" class="mx-2">
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
    <AddStockDialog :dialog="showStockDialog" @toogle="toogleStockDialog"/>
</template>

<script setup>
import AddStockDialog from '@/components/dialogs/addStockDialog.vue';
import { ref } from 'vue'
const search = ref('');
const showStockDialog = ref(false);
const toogleStockDialog = () => {
    showStockDialog.value = !showStockDialog.value
}

const stocks = [
    {
        title: "Warehouse A",
        description: "Main storage warehouse",
        address: "123 Main St",
        contact: "John Doe - 555-1234",
        totalCapacity: "5000"
    },
    {
        title: "Warehouse B",
        description: "Backup storage facility",
        address: "456 Secondary St",
        contact: "Jane Smith - 555-5678",
        totalCapacity: "3000"
    },
    {
        title: "Warehouse C",
        description: "Overflow warehouse for large items",
        address: "789 Industrial Rd",
        contact: "Mike Johnson - 555-9876",
        totalCapacity: "8000"
    }
];

</script>