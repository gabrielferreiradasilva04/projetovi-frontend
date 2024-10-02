<template>
    <DefaultDataTable :headers="headers" :items="movements" :show-add="false" />

</template>
<script setup>
import DefaultDataTable from '@/components/defaultDataTable.vue';


const headers = [
    { title: 'Date', key: 'date' },
    { title: 'Quantity', key: 'quantity' },
    { title: 'Unit Price', key: 'unitPrice' },
    { title: 'Total', key: 'total' },
    { title: 'Invoice', key: 'invoice' },
    { title: 'Ações', key: 'actions', sortable: false },
];
const movements = [
    {
        date: new Date('2024-10-01'), // Exemplo de data
        quantity: 10.5,
        observations: "First movement",
        unitPrice: 25.0,
        total: 250.0,
        invoice: "INV001"
    },
    {
        date: new Date('2024-10-02'),
        quantity: 5.0,
        observations: "Second movement",
        unitPrice: 20.0,
        total: 100.0,
        invoice: "INV002"
    },
    {
        date: new Date('2024-10-03'),
        quantity: 15.0,
        observations: "Third movement",
        unitPrice: 15.0,
        total: 225.0,
        invoice: "INV003"
    },
     {
        date: new Date('2024-10-04'),
        quantity: 12.0,
        observations: "Fourth movement",
        unitPrice: 22.0,
        total: 264.0,
        invoice: "INV004"
    },
    {
        date: new Date('2024-10-05'),
        quantity: 8.0,
        observations: "Fifth movement",
        unitPrice: 18.0,
        total: 144.0,
        invoice: "INV005"
    },
    {
        date: new Date('2024-10-06'),
        quantity: 6.5,
        observations: "Sixth movement",
        unitPrice: 30.0,
        total: 195.0,
        invoice: "INV006"
    },
    {
        date: new Date('2024-10-07'),
        quantity: 20.0,
        observations: "Seventh movement",
        unitPrice: 25.5,
        total: 510.0,
        invoice: "INV007"
    },
    {
        date: new Date('2024-10-08'),
        quantity: 9.0,
        observations: "Eighth movement",
        unitPrice: 27.0,
        total: 243.0,
        invoice: "INV008"
    },
    {
        date: new Date('2024-10-09'),
        quantity: 14.5,
        observations: "Ninth movement",
        unitPrice: 19.5,
        total: 282.75,
        invoice: "INV009"
    },
    {
        date: new Date('2024-10-10'),
        quantity: 18.0,
        observations: "Tenth movement",
        unitPrice: 26.0,
        total: 468.0,
        invoice: "INV010"
    },
    {
        date: new Date('2024-10-11'),
        quantity: 11.0,
        observations: "Eleventh movement",
        unitPrice: 21.0,
        total: 231.0,
        invoice: "INV011"
    },
    {
        date: new Date('2024-10-12'),
        quantity: 7.5,
        observations: "Twelfth movement",
        unitPrice: 16.0,
        total: 120.0,
        invoice: "INV012"
    },
    {
        date: new Date('2024-10-13'),
        quantity: 13.0,
        observations: "Thirteenth movement",
        unitPrice: 28.0,
        total: 364.0,
        invoice: "INV013"
    },
    {
        date: new Date('2024-10-14'),
        quantity: 10.0,
        observations: "Fourteenth movement",
        unitPrice: 29.0,
        total: 290.0,
        invoice: "INV014"
    },
    {
        date: new Date('2024-10-15'),
        quantity: 9.5,
        observations: "Fifteenth movement",
        unitPrice: 23.5,
        total: 223.25,
        invoice: "INV015"
    },
    {
        date: new Date('2024-10-16'),
        quantity: 17.5,
        observations: "Sixteenth movement",
        unitPrice: 20.0,
        total: 350.0,
        invoice: "INV016"
    },
    {
        date: new Date('2024-10-17'),
        quantity: 19.0,
        observations: "Seventeenth movement",
        unitPrice: 31.0,
        total: 589.0,
        invoice: "INV017"
    },
    {
        date: new Date('2024-10-18'),
        quantity: 5.5,
        observations: "Eighteenth movement",
        unitPrice: 14.0,
        total: 77.0,
        invoice: "INV018"
    },
    {
        date: new Date('2024-10-19'),
        quantity: 7.0,
        observations: "Nineteenth movement",
        unitPrice: 18.0,
        total: 126.0,
        invoice: "INV019"
    },
    {
        date: new Date('2024-10-20'),
        quantity: 6.0,
        observations: "Twentieth movement",
        unitPrice: 27.5,
        total: 165.0,
        invoice: "INV020"
    },
    {
        date: new Date('2024-10-21'),
        quantity: 10.0,
        observations: "Twenty-first movement",
        unitPrice: 19.0,
        total: 190.0,
        invoice: "INV021"
    },
    {
        date: new Date('2024-10-22'),
        quantity: 8.5,
        observations: "Twenty-second movement",
        unitPrice: 24.0,
        total: 204.0,
        invoice: "INV022"
    },
    {
        date: new Date('2024-10-23'),
        quantity: 11.5,
        observations: "Twenty-third movement",
        unitPrice: 22.5,
        total: 258.75,
        invoice: "INV023"
    },
    {
        date: new Date('2024-10-24'),
        quantity: 7.0,
        observations: "Twenty-fourth movement",
        unitPrice: 21.0,
        total: 147.0,
        invoice: "INV024"
    },
    {
        date: new Date('2024-10-25'),
        quantity: 12.5,
        observations: "Twenty-fifth movement",
        unitPrice: 28.5,
        total: 356.25,
        invoice: "INV025"
    },
    {
        date: new Date('2024-10-26'),
        quantity: 14.0,
        observations: "Twenty-sixth movement",
        unitPrice: 23.0,
        total: 322.0,
        invoice: "INV026"
    },
    {
        date: new Date('2024-10-27'),
        quantity: 16.5,
        observations: "Twenty-seventh movement",
        unitPrice: 32.0,
        total: 528.0,
        invoice: "INV027"
    },
    {
        date: new Date('2024-10-28'),
        quantity: 9.0,
        observations: "Twenty-eighth movement",
        unitPrice: 29.5,
        total: 265.5,
        invoice: "INV028"
    },
    {
        date: new Date('2024-10-29'),
        quantity: 18.0,
        observations: "Twenty-ninth movement",
        unitPrice: 30.0,
        total: 540.0,
        invoice: "INV029"
    },
    {
        date: new Date('2024-10-30'),
        quantity: 12.0,
        observations: "Thirtieth movement",
        unitPrice: 27.0,
        total: 324.0,
        invoice: "INV030"
    },
    {
        date: new Date('2024-10-31'),
        quantity: 11.0,
        observations: "Thirty-first movement",
        unitPrice: 22.0,
        total: 242.0,
        invoice: "INV031"
    },
    {
        date: new Date('2024-11-01'),
        quantity: 13.5,
        observations: "Thirty-second movement",
        unitPrice: 26.0,
        total: 351.0,
        invoice: "INV032"
    },
    {
        date: new Date('2024-11-02'),
        quantity: 15.0,
        observations: "Thirty-third movement",
        unitPrice: 31.5,
        total: 472.5,
        invoice: "INV033"
    }
];


</script>