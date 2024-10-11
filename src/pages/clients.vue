<template>
    <v-card class="my-2" hover>
        <v-img src="/public/clientes.jpg" max-height="400" cover></v-img>
    </v-card>
    <DefaultDataTable :headers="headers" :items="clients" :show-add="true" @addItem="toogleClientDialog" />
    <AddClientDialog :dialog="showAddClientDialog" @toogle="toogleClientDialog" />
</template>
<script setup>
import DefaultDataTable from '@/components/defaultDataTable.vue';
import AddClientDialog from '@/components/dialogs/addClientDialog.vue';
import { ref } from 'vue'

const showAddClientDialog = ref(false)
const toogleClientDialog = () => {
    showAddClientDialog.value = !showAddClientDialog.value; 
}

const headers = [
    { title: 'Nome', key: 'firstName' },
    { title: 'Telefone', key: 'phoneNumber' },
    { title: 'Email', key: 'email' },
    { title: 'Ativo', key: 'active' },
    { title: 'Ações', key: 'actions', sortable: false },
];

const clients = [
    {
        firstName: 'John',
        lastName: 'Doe',
        phoneNumber: '123-456-7890',
        email: 'john.doe@example.com',
        registrationDate: new Date('2023-01-10'),
        updateDate: new Date('2023-05-15'),
        active: true,
        observations: 'VIP client'
    },
    {
        firstName: 'Jane',
        lastName: 'Smith',
        phoneNumber: '321-654-0987',
        email: 'jane.smith@example.com',
        registrationDate: new Date('2023-02-20'),
        updateDate: new Date('2023-06-10'),
        active: true,
        observations: 'Requires frequent follow-ups'
    },
    {
        firstName: 'Emily',
        lastName: 'Johnson',
        phoneNumber: '987-654-1230',
        email: 'emily.johnson@example.com',
        registrationDate: new Date('2023-03-05'),
        updateDate: new Date('2023-07-25'),
        active: false,
        observations: 'Inactive, former gold member'
    },
    {
        firstName: 'Michael',
        lastName: 'Williams',
        phoneNumber: '654-987-3201',
        email: 'michael.williams@example.com',
        registrationDate: new Date('2022-11-10'),
        updateDate: new Date('2023-01-18'),
        active: true,
        observations: 'Preferred client for early offers'
    },
    {
        firstName: 'Sarah',
        lastName: 'Brown',
        phoneNumber: '111-222-3333',
        email: 'sarah.brown@example.com',
        registrationDate: new Date('2023-04-12'),
        updateDate: new Date('2023-08-14'),
        active: true,
        observations: 'Discount applicable on bulk orders'
    },
    {
        firstName: 'David',
        lastName: 'Jones',
        phoneNumber: '222-333-4444',
        email: 'david.jones@example.com',
        registrationDate: new Date('2022-09-15'),
        updateDate: new Date('2023-06-01'),
        active: false,
        observations: 'Account on hold'
    },
    {
        firstName: 'Laura',
        lastName: 'Garcia',
        phoneNumber: '555-666-7777',
        email: 'laura.garcia@example.com',
        registrationDate: new Date('2023-06-20'),
        updateDate: new Date('2023-07-10'),
        active: true,
        observations: 'New client with pending orders'
    },
    {
        firstName: 'James',
        lastName: 'Martinez',
        phoneNumber: '333-444-5555',
        email: 'james.martinez@example.com',
        registrationDate: new Date('2022-08-18'),
        updateDate: new Date('2023-04-19'),
        active: false,
        observations: 'Switched to another service'
    },
    {
        firstName: 'Elizabeth',
        lastName: 'Clark',
        phoneNumber: '777-888-9999',
        email: 'elizabeth.clark@example.com',
        registrationDate: new Date('2023-05-15'),
        updateDate: new Date('2023-08-22'),
        active: true,
        observations: 'Frequent shopper, eligible for loyalty rewards'
    },
    {
        firstName: 'Robert',
        lastName: 'Rodriguez',
        phoneNumber: '888-999-0000',
        email: 'robert.rodriguez@example.com',
        registrationDate: new Date('2023-07-10'),
        updateDate: new Date('2023-09-12'),
        active: true,
        observations: 'International client'
    },
    {
        firstName: 'Daniel',
        lastName: 'Lewis',
        phoneNumber: '999-000-1111',
        email: 'daniel.lewis@example.com',
        registrationDate: new Date('2022-10-30'),
        updateDate: new Date('2023-03-17'),
        active: true,
        observations: 'Requires priority support'
    },
    {
        firstName: 'Sophia',
        lastName: 'Walker',
        phoneNumber: '111-222-3334',
        email: 'sophia.walker@example.com',
        registrationDate: new Date('2023-02-25'),
        updateDate: new Date('2023-06-08'),
        active: false,
        observations: 'Dormant account, has not ordered recently'
    },
    {
        firstName: 'Anthony',
        lastName: 'Harris',
        phoneNumber: '444-555-6666',
        email: 'anthony.harris@example.com',
        registrationDate: new Date('2023-09-05'),
        updateDate: new Date('2023-09-25'),
        active: true,
        observations: 'New client with high order potential'
    },
    {
        firstName: 'Olivia',
        lastName: 'Hall',
        phoneNumber: '222-555-7777',
        email: 'olivia.hall@example.com',
        registrationDate: new Date('2022-12-10'),
        updateDate: new Date('2023-05-02'),
        active: true,
        observations: 'Has requested a product demonstration'
    },
    {
        firstName: 'Matthew',
        lastName: 'Young',
        phoneNumber: '333-888-9999',
        email: 'matthew.young@example.com',
        registrationDate: new Date('2023-04-02'),
        updateDate: new Date('2023-06-30'),
        active: true,
        observations: 'Platinum member, top priority for customer service'
    }
];


</script>