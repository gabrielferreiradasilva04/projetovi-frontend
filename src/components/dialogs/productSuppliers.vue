<template>
    <v-dialog v-model="props.dialog" max-width="800">
        <v-card prepend-icon="mdi-account" title="Vincular Fornecedores">
            <v-card-text>
                <v-form ref="formSup" class="my-4 ga-3" v-on:submit.prevent="save">
                    <v-combobox :rules="rules" prepend-inner-icon="mdi-tag" label="Produto selecionado"
                        :items="productStore.products" v-model="product" item-title="code"></v-combobox>
                    <VDivider />
                    <v-combobox multiple hide-selected :rules="rules" prepend-inner-icon="mdi-account"
                        label="Fornecedores" placeholder="Selecione ao menos um fornecedor"
                        :items="supplierStore.suppliers" v-model="product.suppliers" item-title="name"></v-combobox>


                    <VDivider />

                    <div class="my-2 text-end">
                        <v-btn color="success" class="mx-2" type="submit" elevation="5" text="Salvar"></v-btn>
                        <VDivider vertical />
                        <v-btn elevation="5" variant="tonal" text="Fechar" @click="$emit('toogle')"></v-btn>
                    </div>
                </v-form>
            </v-card-text>
            <VDivider />
        </v-card>
    </v-dialog>
</template>
<script setup>
import { defineProps } from 'vue';
import { useProductStore } from '@/stores/productStore';
import { useSupplierStore } from '@/stores/supplierStore';

const props = defineProps({
    dialog: Boolean,
});

const productStore = useProductStore();
const supplierStore = useSupplierStore();
const emit = defineEmits(['toogle']);
const formSup = ref(null);

const initialProductState = {
    id: '',
    code: '',
    description: '',
    priceCost: 0,
    salePrice: 0,
    minimumStock: 0,
    active: false,
    unitMeasure: null,
    stock: null,
    deposits: [],
    location: null,
    categories: [],
    suppliers: [],
    registrationDate: null,
    updateDate: null,
    brand: null,
};

const product = ref({ ...initialProductState });

const rules = [
    v => !!v || 'Campo obrigatório',
];

watch(() => props.dialog, (newDialogState) => {
    if (newDialogState) {
        product.value = { ...initialProductState };
    }
})

async function save() {
    const { valid } = await formSup.value.validate();
    if (valid) {
        productStore.update(product.value);
    } else {
        alert('não valido');
    }
}
</script>