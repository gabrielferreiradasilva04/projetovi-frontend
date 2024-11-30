<template>
    <canvas id="chart"></canvas>
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
    { year: 2017, count: 35 },
    { year: 2018, count: 40 },
    { year: 2019, count: 38 },
    { year: 2020, count: 42 },
    { year: 2021, count: 45 },
    { year: 2022, count: 48 },
    { year: 2023, count: 50 },
    { year: 2024, count: 55 },
    { year: 2025, count: 60 },
];


onMounted(() => {
    const ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(row => row.year),
            datasets: [
                {
                    label: 'Aquisições por ano',
                    data: data.map(row => row.count),
                    backgroundColor: colors.deepPurple.darken4,
                    borderColor: colors.indigo.darken4,
                    borderWidth: 2,
                }
            ]
        },
        options: {
            responsive: true,
            layout: {
                padding: 0
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 14
                        }
                    }
                }
            },
            animations: {
                tension: {
                    duration: 1000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: false
                },
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            },
        }
    });
});
</script>
