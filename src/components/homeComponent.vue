<template>
    <v-alert density="compact" text="Funcionalidade em Desenvolvimento, em breve traremos novidades!" title="Atenção!"
        type="warning" />
    <v-container>
        <div class="d-flex justify-end mb-3">
            <v-card class="px-4 py-2">
                <v-icon class="mr-2">mdi-calendar</v-icon>
                {{ new Date().toLocaleDateString() }}
            </v-card>
        </div>
        <v-card title="Faturamento" density="compact" class=" pa-3 my-3" variant="text" border>
            <div class="d-flex my-5">
                <v-row>
                    <v-col cols="12" sm="6" md="4">
                        <v-card title="Mês Atual" class="text-center" color="primary">
                            <h1>R$52.000,00</h1>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-card title="Mês Anterior" class="text-center" color="secondary">
                            <h1>R$30.000,00</h1>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-card title="Em Orçamentos" class="text-center" color="primary">
                            <h1>R$13.000,00</h1>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </v-card>
        <div>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-card variant="text" border min-height="500" max-height="500" title="Faturamento anual">
                        <grafico1 />
                        <v-card-actions class="justify-end">
                            <v-btn><v-icon> mdi-information</v-icon></v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-card variant="text" border min-height="500" max-height="500" title="Faturamento mensal">
                        <grafico2 />
                    </v-card>
                </v-col>
            </v-row>
        </div>
        <div class="my-3">
            <v-card>
                <v-card variant="text" border title="Volume de Saídas Mensal">
                    <Grafico3 />
                </v-card>
            </v-card>
        </div>
    </v-container>
</template>
<script setup>
import grafico1 from './graficos/grafico1.vue';
import grafico2 from './graficos/grafico2.vue';
import Grafico3 from './graficos/grafico3.vue';
</script>