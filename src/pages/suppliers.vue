<template>
<DefaultDataTable :headers="headers" :items="suppliers" :show-add="true" />
</template>
<script setup>
import DefaultDataTable from '@/components/defaultDataTable.vue';
import { ref } from 'vue'

const suppliers = [
    {
        name: 'ABC Supplies',
        document: '12.345.678/0001-99',
        address: 'Rua das Flores, 123, São Paulo - SP',
        phoneNumber: '(11) 98765-4321',
        email: 'contato@abcsupplies.com',
        registrationDate: '2022-05-10',
        active: true,
        observations: 'Preferred supplier for electronics components',
    },
    {
        name: 'XYZ Components',
        document: '98.765.432/0001-11',
        address: 'Av. Atlântica, 500, Rio de Janeiro - RJ',
        phoneNumber: '(21) 98765-1234',
        email: 'sales@xyzcomponents.com',
        registrationDate: '2021-12-15',
        active: false,
        observations: 'Occasional delays in delivery',
    },
    {
        name: 'Mega Industrial',
        document: '11.111.111/0001-22',
        address: 'Rua dos Industriários, 999, Belo Horizonte - MG',
        phoneNumber: '(31) 99876-5432',
        email: 'support@megaindustrial.com',
        registrationDate: '2023-01-20',
        active: true,
        observations: 'Reliable partner for industrial machinery',
    },
    {
        name: 'Techno Parts',
        document: '22.222.222/0001-33',
        address: 'Av. das Indústrias, 1111, Curitiba - PR',
        phoneNumber: '(41) 98877-6655',
        email: 'contact@technoparts.com',
        registrationDate: '2020-07-10',
        active: true,
        observations: 'Specialized in automotive parts',
    },
    {
        name: 'Global Distribution',
        document: '33.333.333/0001-44',
        address: 'Rua Central, 444, Porto Alegre - RS',
        phoneNumber: '(51) 99988-7766',
        email: 'global@distribution.com',
        registrationDate: '2022-09-05',
        active: false,
        observations: 'Irregular stock availability',
    }
];
const headers = [
    { title: 'Nome', key: 'name' },
    { title: 'Endereço', key: 'address' },
    { title: 'Telefone', key: 'phoneNumber' },
    { title: 'Email', key: 'email' },
    { title: 'Registro', key: 'registrationDate' },
    { title: 'Ativo', key: 'active' },
    { title: 'Ações', key: 'actions', sortable: false },
];



</script>