<template>
    <canvas id="chart2"></canvas>
</template>

<script setup>
import { Chart, registerables } from 'chart.js';
import { onMounted } from 'vue';
import colors from 'vuetify/util/colors'

// Registrar escalas, elementos e plugins
Chart.register(...registerables);

const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
];

onMounted(() => {
    const ctx = document.getElementById('chart2').getContext('2d');
    new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: data.map(row => row.year),
            datasets: [
                {
                    label: 'Acquisitions by year',
                    data: data.map(row => row.count),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: colors.cyan.lighten1,
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
</script>
