<template>
    <DefaultDataTable :headers="store.headers" :items="store.products" :show-add="true" @addItem="toogleProductDialog()"
        @update="toogleProductDialog" />
    <AddProductDialog :edit-mode="editMode" :product="selectedProduct" :dialog="showAddProductDialog"
        @toogle="toogleProductDialog" />
</template>
<script setup>
import DefaultDataTable from '@/components/defaultDataTable.vue';
import AddProductDialog from '@/components/dialogs/registerProductDialog.vue';
import { useProductStore } from '@/stores/productStore';
import { onMounted, onUnmounted, ref } from 'vue';

const showAddProductDialog = ref(false);
const store = useProductStore();
const selectedProduct = ref({
    id: '',
    code: '',
    description: '',
    priceCost: 0,
    salePrice: 0,
    minimumStock: 0,
    active: Boolean,
    unitMeasure: null,
    stock: null,
    deposits: [],
    location: null,
    categories: [],
    suppliers: [],
    registrationDate: Date,
    updateDate: Date
});
const editMode = ref(false);
const toogleProductDialog = (product) => {
    if (product != null) {
        selectedProduct.value = product;
        editMode.value = true;
    } else {
        selectedProduct.value = {};
        editMode.value = false;
    }
    showAddProductDialog.value = !showAddProductDialog.value;
}
onMounted(() => {
    store.findAll();
});
onUnmounted(() => {
    selectedProduct.value = {};
})




</script>