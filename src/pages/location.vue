<template>
    <v-card variant="text" hover class="my-2">
        <v-img src="/public/localizacoes.jpg" cover max-height="400"></v-img>
    </v-card>
    <DefaultDataTable :headers="headers" :items="locations" :show-add="true" @addItem="toogleDialogLocation" />
    <AddLocationDialog :dialog="showDialogLocation" @toogle="toogleDialogLocation" />
</template>
<script setup>
import DefaultDataTable from '@/components/defaultDataTable.vue';
import AddLocationDialog from '@/components/dialogs/addLocationDialog.vue';
import { ref } from 'vue'
const showDialogLocation = ref(false)
const toogleDialogLocation = () => {
    showDialogLocation.value = !showDialogLocation.value;
}


const headers = [
    { title: 'Title', key: 'title' },
    { title: 'Description', key: 'description' },
    { title: 'Registration Date', key: 'registrationDate' },
    { title: 'Ações', key: 'actions', sortable: false },
];
const locations = [
    {
        title: 'Main Warehouse',
        description: 'Primary storage facility',
        registrationDate: new Date('2023-01-10')
    },
    {
        title: 'Back Room',
        description: 'Small back room for overstock',
        registrationDate: new Date('2022-12-22')
    },
    {
        title: 'Showroom',
        description: 'Display and showcase area',
        registrationDate: new Date('2023-03-01')
    },
    {
        title: 'Offsite Storage',
        description: 'Storage facility in a remote location',
        registrationDate: new Date('2023-05-10')
    },
    {
        title: 'Cold Storage',
        description: 'Refrigerated space for perishable items',
        registrationDate: new Date('2023-02-15')
    },
    {
        title: 'Outdoor Storage',
        description: 'Space for large items stored outside',
        registrationDate: new Date('2023-07-21')
    }
];
</script>
