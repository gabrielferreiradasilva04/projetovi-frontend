<template>
    <v-card variant="text" hover class="my-2">
        <v-img src="/public/deposito.jpg" cover max-height="400"></v-img>
    </v-card>
    <DefaultDataTable :headers="headers" :items="deposits" :show-add="true" @addItem="toogleDepositDialog" />
    <AddDepositDialog :dialog="showDepositDialog" @toogle="toogleDepositDialog" />
</template>
<script setup>
import DefaultDataTable from '@/components/defaultDataTable.vue';
import AddDepositDialog from '@/components/dialogs/addDepositDialog.vue';
import { ref } from 'vue'

const showDepositDialog = ref(false);

const toogleDepositDialog = () => {
    showDepositDialog.value = !showDepositDialog.value;
}


const headers = [
    { title: 'Title', key: 'title' },
    { title: 'Description', key: 'description' },
    { title: 'Registration Date', key: 'registrationDate' },
    { title: 'Ações', key: 'actions', sortable: false },
];
const deposits = [
    {
        title: 'Central Deposit',
        description: 'Main deposit for all goods',
        registrationDate: new Date('2023-01-12')
    },
    {
        title: 'Regional Deposit',
        description: 'Deposit serving regional stores',
        registrationDate: new Date('2023-03-08')
    },
    {
        title: 'Retail Deposit',
        description: 'Deposit linked to retail stores',
        registrationDate: new Date('2022-11-17')
    },
    {
        title: 'Online Orders Deposit',
        description: 'Dedicated deposit for online orders',
        registrationDate: new Date('2023-05-20')
    },
    {
        title: 'Temporary Deposit',
        description: 'Temporary storage for seasonal items',
        registrationDate: new Date('2023-08-25')
    }
];
</script>
