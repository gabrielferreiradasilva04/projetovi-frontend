<template>
    <v-dialog v-model="props.dialog" max-width="800">
        <v-card prepend-icon="mdi-package-variant-closed" title="Vincular Depósito">
            <v-card-text>
                <v-form ref="formDep" class="my-4 ga-3" v-on:submit.prevent="save">
                    <VRow>
                        <VCol cols="12" md="6">
                            <v-combobox :rules="rules" prepend-inner-icon="mdi-tag" label="Produto selecionado"
                                :items="productStore.products" v-model="productDeposit.product"
                                item-title="code"></v-combobox>
                            <p>Informações</p>
                        </VCol>
                        <VCol>
                            <v-combobox hide-selected prepend-inner-icon="mdi-package-variant-closed" label="Depósito"
                                placeholder="Selecione o depósito desejado" :items="depositStore.deposits"
                                item-title="title" v-model="productDeposit.deposit"></v-combobox>
                        </VCol>
                    </VRow>
                    <VDivider class="ma-1" />
                    <VRow>
                        <VCol cols="12" md="6">
                            <VTextField type="number" v-model="productDeposit.minimumStock" label="Estoque Mínimo" />
                        </VCol>
                        <VCol cols="12" md="6">
                            <VTextField readonly v-model="productDeposit.registrationDate" label="Data cadastro" />
                            <VTextField readonly v-model="productDeposit.updateDate" label="Data atualização" />

                        </VCol>
                    </VRow>


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
    <VSnackbar v-model="showSnack" :timeout="productDepositStore.snackbarConfig.time"
        :color="productDepositStore.snackbarConfig.color" location="top right" elevation="2">
        {{ productDepositStore.snackbarConfig.message }}
    </VSnackbar>

</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
import { useProductStore } from '@/stores/productStore';
import { useDepositStore } from '@/stores/depositStore';
import { useProductDepositStore } from '@/stores/productDepositStore';

const props = defineProps({
    dialog: Boolean,
});
const depositStore = useDepositStore();
const productStore = useProductStore();
const productDepositStore = useProductDepositStore();
const emit = defineEmits(['toogle'])
depositStore.listAll();
productStore.findAll();

//regras de validação
const rules = [
    v => !!v || 'Campo obrigatório',
];

//estado inicial do produtodeposito
const initialProductDepositState = {
    quantity: 0.0,
    minimumStock: 0.0,
    product: {
        id: '',
        code: '',
        description: '',
        priceCost: 0,
        salePrice: 0,
        active: false,
        unitMeasure: null,
        stock: null,
        location: null,
        categories: [],
        registrationDate: null,
        updateDate: null,
        brand: null,
    },
    deposit: {
        id: '',
        title: '',
        description: '',
        active: Boolean,
        registrationDate: null,
        updateDate: null
    },
    registrationDate: null,
    updateDate: null,

}
//cópia do estado inicial porém reativo
const productDeposit = ref({ ...initialProductDepositState });


const formDep = ref(null);
async function save() {
    const { valid } = await formDep.value.validate();
    if (valid) {
        productDepositStore.save(productDeposit.value);
    }
}

//snackbar
const showSnack = ref(false);

watch(
    () => productDepositStore.snackbarConfig.message,
    (newMessage) => {

        showSnack.value = newMessage !== '';
        setTimeout(() => {
            productDepositStore.clearSnackBarMessage();
        }, 2000);
    }
);
watch(() => props.dialog, (newDialogState) => {
    if (newDialogState) {
        productDeposit.value = { ...initialProductDepositState };
    }
})
</script>