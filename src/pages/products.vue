<template>
    <v-card variant="text" hover class="my-2">
        <v-img src="/public/produtos.jpg" cover max-height="400"></v-img>
    </v-card>
        <DefaultDataTable :headers="headers" :items="items" :show-add="true" @addItem="toogleProductDialog" />
    <AddProductDialog :dialog="showAddProductDialog" @toogle="toogleProductDialog" />
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
    { title: 'Un. Med', key: 'unitMeasure' },
    { title: 'Valor Venda', key: 'salePrice' },
    { title: 'Categoria', key: 'category' },
    { title: 'Loc', key: 'location' },
    { title: 'Em Estoque', key: 'quantityStock' },
    { title: 'Ações', key: 'actions', sortable: false },
]
const items = [
    {
        code: 'A001',
        priceCost: 10.50,
        salePrice: 15.00,
        quantityStock: 100,
        category: 'Category 1',
        location: 'Location A',
        unitMeasure: 'kg'
    },
    {
        code: 'A002',
        priceCost: 20.00,
        salePrice: 30.00,
        quantityStock: 50,
        category: 'Category 2',
        location: 'Location B',
        unitMeasure: 'kg'
    },
    {
        code: 'A003',
        priceCost: 5.00,
        salePrice: 8.50,
        quantityStock: 200,
        category: 'Category 3',
        location: 'Location C',
        unitMeasure: 'kg'
    },
    {
        code: 'A004',
        priceCost: 12.75,
        salePrice: 18.00,
        quantityStock: 75,
        category: 'Category 4',
        location: 'Location D',
        unitMeasure: 'kg'
    },
    {
        code: 'A005',
        priceCost: 8.20,
        salePrice: 12.00,
        quantityStock: 150,
        category: 'Category 5',
        location: 'Location E',
        unitMeasure: 'kg'
    },
    {
        code: 'A001',
        priceCost: 10.50,
        salePrice: 15.00,
        quantityStock: 100,
        category: 'Category 1',
        location: 'Location A',
        unitMeasure: 'kg'
    },
    {
        code: 'A002',
        priceCost: 20.00,
        salePrice: 30.00,
        quantityStock: 50,
        category: 'Category 2',
        location: 'Location B',
        unitMeasure: 'kg'
    },
    {
        code: 'A003',
        priceCost: 5.00,
        salePrice: 8.50,
        quantityStock: 200,
        category: 'Category 3',
        location: 'Location C',
        unitMeasure: 'kg'
    },
    {
        code: 'A004',
        priceCost: 12.75,
        salePrice: 18.00,
        quantityStock: 75,
        category: 'Category 4',
        location: 'Location D',
        unitMeasure: 'kg'
    },
    {
        code: 'A005',
        priceCost: 8.20,
        salePrice: 12.00,
        quantityStock: 150,
        category: 'Category 5',
        location: 'Location E',
        unitMeasure: 'kg'
    },
    {
        code: 'A001',
        priceCost: 10.50,
        salePrice: 15.00,
        quantityStock: 100,
        category: 'Category 1',
        location: 'Location A',
        unitMeasure: 'kg'
    },
    {
        code: 'A002',
        priceCost: 20.00,
        salePrice: 30.00,
        quantityStock: 50,
        category: 'Category 2',
        location: 'Location B',
        unitMeasure: 'kg'
    },
    {
        code: 'A003',
        priceCost: 5.00,
        salePrice: 8.50,
        quantityStock: 200,
        category: 'Category 3',
        location: 'Location C',
        unitMeasure: 'kg'
    },
    {
        code: 'A004',
        priceCost: 12.75,
        salePrice: 18.00,
        quantityStock: 75,
        category: 'Category 4',
        location: 'Location D',
        unitMeasure: 'kg'
    },
    {
        code: 'A005',
        priceCost: 8.20,
        salePrice: 12.00,
        quantityStock: 150,
        category: 'Category 5',
        location: 'Location E',
        unitMeasure: 'kg'
    }
];



</script>