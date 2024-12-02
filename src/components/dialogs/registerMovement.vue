<template>
    <v-dialog v-model="props.dialog" max-width="800">
        <v-card prepend-icon="mdi-swap-horizontal" title="Registrar movimento">
            <v-card-text>
                <v-form ref="formMov" v-on:submit.prevent="save" class="my-4 ga-3">
                    <VRow>
                        <VCol cols="12" md="6">
                            <VCombobox :rules="rules" label="Produto-Depósito" v-model="movement.productDeposit"
                                :items="productDepositStore.productDeposits" :item-title="formatProductDeposit">
                            </VCombobox>
                            <VTextarea v-model="movement.observation" :rules="rules" label="Observação" />
                            <VTextField type="number" v-model="movement.quantity" :rules="rules" label="Quantidade" />
                            <VTextField v-model="movement.date" readonly label="Data" />
                        </VCol>
                        <VCol cols="12" md="6">
                            <VCombobox v-model="movement.movementType" label="Entrada ou Saída"
                                :items="movementTypeStore.movementsType" item-title="title" :rules="rules"></VCombobox>
                            <VTextField v-model="movement.productDeposit.product.salePrice" readonly
                                label="Valor unitário" />
                            <VTextField readonly label="Valor Total" v-model="total" />
                            <VTextField v-model="movement.invoice" label="Documento(se houver)" />
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
    <VSnackbar v-model="showSnack" :timeout="movementStore.snackbarConfig.time"
        :color="movementStore.snackbarConfig.color" location="top right" elevation="2">
        {{ movementStore.snackbarConfig.message }}
    </VSnackbar>
</template>
<script setup>
import { useMovementTypeStore } from '@/stores/movementTypeStore';
import { useProductDepositStore } from '@/stores/productDepositStore';
import { useMovementStore } from '@/stores/movementStore';
import { defineProps, defineEmits } from 'vue';

const productDepositStore = useProductDepositStore();
const movementTypeStore = useMovementTypeStore();
const movementStore = useMovementStore();
const emit = defineEmits(['toogle'])
const formMov = ref(null);
const props = defineProps({
    dialog: Boolean
})
//carregar os dados na tela;
const initialMovementState = {
    productDeposit: {
        product: {
            salePrice: 0
        }
    },
}
const movement = ref({
    ...initialMovementState,
})
const showSnack = ref(false);
productDepositStore.findAll();
movementTypeStore.findAll();

async function save() {
    const { valid } = await formMov.value.validate();
    if (valid) {
        movement.value.total = total;
        movementStore.save(movement.value);
    }
}

const rules = [
    v => !!v || 'Campo obrigatório',
];
// Formata a exibição do Produto e Depósito
const formatProductDeposit = (item) => {
    if (!item) return '';
    const productName = item.product?.code || '';
    const depositName = item.deposit?.title || '';
    return `${productName} - ${depositName}`;
};

//calculo do valor total
const total = computed(() => {
    const quantity = Number(movement.value.quantity) || 0;
    const salePrice = Number(movement.value.productDeposit.product.salePrice) || 0;
    return quantity * salePrice;
});

//snackbar
watch(
    () => movementStore.snackbarConfig.message,
    (newMessage) => {

        showSnack.value = newMessage !== '';
        setTimeout(() => {
            movementStore.clearSnackBarMessage();
        }, 2000);
    }
);
</script>