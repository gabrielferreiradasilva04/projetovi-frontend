<template>
    <v-container min-width="90vw">
        <v-card hover variant="text" class="my-2">
            <v-img src="/public/dashboard.svg" max-height="400" cover rounded="8"></v-img>
        </v-card>
        <v-card hover title="Aquisições por ano" border variant="text" class="justify-center">
            <grafico1 />
            <v-card-actions class="justify-end">
                <v-btn><v-icon> mdi-information</v-icon></v-btn>
            </v-card-actions>
        </v-card>

        <v-row>
            <v-col cols="12" md="6">
                <v-card border hover class="d-flex justify-center my-6 ">
                    <grafico2 />
                </v-card>
            </v-col>
            <v-col cols="12" md="6">
                <v-card border hover class="d-flex justify-center my-6">
                    <Grafico3 />
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup>
import grafico1 from './graficos/grafico1.vue';
import grafico2 from './graficos/grafico2.vue';
import Grafico3 from './graficos/grafico3.vue';
</script>