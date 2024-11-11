<template>
    <v-dialog v-model="props.dialog" max-width="800">
        <v-card prepend-icon="mdi-sitemap" title="Informações de Estoque">
            <v-card-text>
                <v-form class="my-4" v-on:submit.prevent="save">
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-text-field v-model="stock.title" variant="outlined" prepend-inner-icon="mdi-format-title"
                                label="Título"></v-text-field>

                            <v-textarea v-model="stock.description" clearable label="Descrição"
                                variant="outlined"></v-textarea>

                        </v-col>
                        <v-col cols="12" md="6" xs="3">
                            <v-text-field v-model="stock.address" variant="outlined" prepend-inner-icon="mdi-map-marker"
                                label="Endereço"></v-text-field>
                            <v-text-field v-model="stock.contact" variant="outlined" prepend-inner-icon="mdi-account"
                                label="Contato"></v-text-field>
                            <v-text-field v-model="stock.totalCapacity" type="number" variant="outlined"
                                prepend-inner-icon="mdi-package" label="Capacidade Total"></v-text-field>
                        </v-col>
                    </v-row>
                    <VDivider />
                    <div class="my-2 text-end">
                        <v-btn class="mx-2" type="submit" variant="tonal" @click="$emit('toogle')"
                            text="Salvar"></v-btn>
                        <VDivider vertical />
                        <v-btn variant="tonal" text="Fechar" @click="$emit('toogle')"></v-btn>
                    </div>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
    <CustomSnackbar :time="store.snackbarConfig.time" :color="store.snackbarConfig.color"
        :message="store.snackbarConfig.message" />

</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
import { ref } from 'vue'
import { useStockStore } from '@/stores/stockStore';

import CustomSnackbar from '../customSnackbar.vue';
const stock = ref({
    title: '',
    description: '',
    address: '',
    contact: '',
    totalCapacity: 0,
})

const emit = defineEmits(['toogle']);

const store = useStockStore();

async function save() {
    store.saveNewStock(stock.value);
    stock.value = {
        title: '',
        description: '',
        address: '',
        contact: '',
        totalCapacity: 0
    }
}
const props = defineProps({
    dialog: Boolean,
    stock: {}
});
</script>
