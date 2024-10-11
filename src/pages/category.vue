
<template>
    <v-card class="my-2" hover>
        <v-img src="/public/productcategory.svg" max-height="400" cover></v-img>
    </v-card>
    <DefaultDataTable :headers="headers" :items="categories" :show-add="true" @addItem="toogleCategoryDialog"/>
    <AddCategoryDialog :dialog="showCategoryDialog" @toogle="toogleCategoryDialog"/>
</template>
<script setup>
import DefaultDataTable from '@/components/defaultDataTable.vue';
import AddCategoryDialog from '@/components/dialogs/addCategoryDialog.vue';
import {ref} from 'vue'

const showCategoryDialog = ref(false);

const toogleCategoryDialog = () => {
    showCategoryDialog.value = !showCategoryDialog.value
}

const headers = [
    { title: 'Title', key: 'title' },
    { title: 'Description', key: 'description' },
    { title: 'Registration Date', key: 'registrationDate' },
    { title: 'Ações', key: 'actions', sortable: false },
];
const categories = [
    {
        title: 'Electronics',
        description: 'All kinds of electronic gadgets',
        registrationDate: new Date('2023-01-15')
    },
    {
        title: 'Furniture',
        description: 'Home and office furniture',
        registrationDate: new Date('2022-12-05')
    },
    {
        title: 'Clothing',
        description: 'Men, women and kids clothing',
        registrationDate: new Date('2023-03-22')
    },
    {
        title: 'Books',
        description: 'Fiction, non-fiction, and academic books',
        registrationDate: new Date('2023-05-01')
    },
    {
        title: 'Toys',
        description: 'Children toys of all ages',
        registrationDate: new Date('2023-02-18')
    },
    {
        title: 'Food',
        description: 'Groceries and gourmet food items',
        registrationDate: new Date('2023-07-30')
    },
    {
        title: 'Beauty',
        description: 'Beauty products and cosmetics',
        registrationDate: new Date('2022-11-10')
    },
    {
        title: 'Sports',
        description: 'Sporting goods and fitness equipment',
        registrationDate: new Date('2023-06-12')
    },
    {
        title: 'Automotive',
        description: 'Car accessories and parts',
        registrationDate: new Date('2023-04-09')
    },
    {
        title: 'Health',
        description: 'Healthcare products and supplements',
        registrationDate: new Date('2023-09-03')
    },
    {
        title: 'Music',
        description: 'Musical instruments and accessories',
        registrationDate: new Date('2022-10-25')
    },
    {
        title: 'Home Decor',
        description: 'Decorative items for homes',
        registrationDate: new Date('2023-08-17')
    },
    {
        title: 'Jewelry',
        description: 'Gold, silver, and fashion jewelry',
        registrationDate: new Date('2023-05-28')
    },
    {
        title: 'Pet Supplies',
        description: 'Products for pets and pet care',
        registrationDate: new Date('2023-01-09')
    },
    {
        title: 'Garden',
        description: 'Tools and accessories for gardening',
        registrationDate: new Date('2023-07-02')
    }
];

</script>