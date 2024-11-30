<template>
    <DefaultDataTable :show-product-menu="true" :product-menu-items="store.menuItems" :headers="store.headers"
        :items="store.products" :show-add="true" @addItem="toogleProductDialog()" @update="toogleProductDialog"
        @menuItemClick="menuItemClick" />
    <AddProductDialog :edit-mode="editMode" :product="selectedProduct" :dialog="showAddProductDialog"
        @toogle="toogleProductDialog" />

    <ProductSuppliers :dialog="showSuppliersProductDialog" @toogle="toogleSuppliersProductDialog" />

</template>
<script setup>
import DefaultDataTable from '@/components/defaultDataTable.vue';
import ProductSuppliers from '@/components/dialogs/productSuppliers.vue';
import AddProductDialog from '@/components/dialogs/registerProductDialog.vue';
import { useProductStore } from '@/stores/productStore';
import { onMounted, onUnmounted, ref } from 'vue';

const showAddProductDialog = ref(false);
const showSuppliersProductDialog = ref(false);
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
    updateDate: Date,
    brand: null
});
const editMode = ref(false);
const toogleProductDialog = (product) => {
    if (product != null) {
        console.log(selectedProduct);
        selectedProduct.value = product;
        editMode.value = true;
    } else {
        selectedProduct.value = {};
        editMode.value = false;
    }
    showAddProductDialog.value = !showAddProductDialog.value;
}
const toogleSuppliersProductDialog = () => {
    showSuppliersProductDialog.value = !showSuppliersProductDialog.value;
}

const menuItemClick = (item) => {
    if (item === 1) {
        toogleSuppliersProductDialog();
    }
}
onMounted(() => {
    store.findAll();
});
onUnmounted(() => {
    selectedProduct.value = {};
})




</script>