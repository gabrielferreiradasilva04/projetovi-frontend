<template>
    <DefaultDataTable :headers="headers" :items="items" :show-add="true" @addItem="toogleProductDialog"/>
    <AddProductDialog :dialog="showAddProductDialog" @toogle="toogleProductDialog"/>
</template>
<script setup>
import DefaultDataTable from '@/components/defaultDataTable.vue';
import AddProductDialog from '@/components/dialogs/addProductDialog.vue';
import { ref } from 'vue';
const showAddProductDialog = ref(false);

const toogleProductDialog = () => {
    showAddProductDialog.value = !showAddProductDialog.value;
}

const headers = [
    { title: 'Código', key: 'code' },
    { title: 'Valor Venda', key: 'salePrice' },
    { title: 'Valor Compra', key: 'quantityStock' },
    { title: 'Em Estoque', key: 'quantityStock' },
    { title: 'Ações', key: 'actions', sortable: false },
]
const items = [
    {
        code: 'A001',
        priceCost: 10.50,
        salePrice: 15.00,
        quantityStock: 100,
    },
    {
        code: 'A002',
        priceCost: 20.00,
        salePrice: 30.00,
        quantityStock: 50,
    },
    {
        code: 'A003',
        priceCost: 5.00,
        salePrice: 8.50,
        quantityStock: 200,
    },
    {
        code: 'A004',
        priceCost: 12.75,
        salePrice: 18.00,
        quantityStock: 75,
    },
    {
        code: 'A005',
        priceCost: 8.20,
        salePrice: 12.00,
        quantityStock: 150,
    },
    {
        code: 'A001',
        priceCost: 10.50,
        salePrice: 15.00,
        quantityStock: 100,
    },
    {
        code: 'A002',
        priceCost: 20.00,
        salePrice: 30.00,
        quantityStock: 50,
    },
    {
        code: 'A003',
        priceCost: 5.00,
        salePrice: 8.50,
        quantityStock: 200,
    },
    {
        code: 'A004',
        priceCost: 12.75,
        salePrice: 18.00,
        quantityStock: 75,
    },
    {
        code: 'A005',
        priceCost: 8.20,
        salePrice: 12.00,
        quantityStock: 150,
    },
    {
        code: 'A001',
        priceCost: 10.50,
        salePrice: 15.00,
        quantityStock: 100,
    },
    {
        code: 'A002',
        priceCost: 20.00,
        salePrice: 30.00,
        quantityStock: 50,
    },
    {
        code: 'A003',
        priceCost: 5.00,
        salePrice: 8.50,
        quantityStock: 200,
    },
    {
        code: 'A004',
        priceCost: 12.75,
        salePrice: 18.00,
        quantityStock: 75,
    },
    {
        code: 'A005',
        priceCost: 8.20,
        salePrice: 12.00,
        quantityStock: 150,
    }
];


</script>