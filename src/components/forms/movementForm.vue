<template>
    <v-form class="my-4">
        <v-row>
            <v-col cols="12" md="6">
                <v-combobox clearable label="Produto" :items="['Produto X',
                    'Produto Y',
                    'Produto Z',
                    'Produto W',
                    'Produto V']" variant="outlined"></v-combobox>
                <v-date-input label="Data Movimento" prepend-icon="" prepend-inner-icon="mdi-calendar"
                    variant="outlined"></v-date-input>

                <v-text-field variant="outlined" prepend-inner-icon="mdi-currency-brl" label="Valor Unitário" disabled
                    single-line></v-text-field>

                <v-text-field disabled variant="outlined" prepend-inner-icon="mdi-currency-brl"
                    label="Total Movimentado" type="number"></v-text-field>
            </v-col>
            <v-col cols="12" md="6" xs="3">
                <v-text-field variant="outlined" prepend-inner-icon="mdi-numeric" label="Quantidade"
                    type="number"></v-text-field>

                <v-select clearable label="Transação" :items="['123', '321', '555', '789', '344', '1234']"
                    variant="outlined"></v-select>
                <v-text-field variant="outlined" prepend-inner-icon="mdi-file-document" label="N° da NF ou documento"
                    type="number"></v-text-field>

            </v-col>
        </v-row>
    </v-form>
</template>
<script setup>
import { VDateInput } from 'vuetify/labs/components';

</script>