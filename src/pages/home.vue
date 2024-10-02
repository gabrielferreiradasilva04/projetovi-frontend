<template>
        <v-row>
            <v-col>
                <v-sheet>
                    <GraficoTeste />
                </v-sheet>
            </v-col>
            <v-col>
                <v-sheet>
                    <GraficoTeste2 />
                </v-sheet>
            </v-col>
        </v-row>
</template>

<script setup>
import GraficoTeste from '@/components/graficos/grafico1.vue';
import GraficoTeste2 from '@/components/graficos/grafico2.vue';
</script>