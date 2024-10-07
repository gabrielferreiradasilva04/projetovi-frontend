<template>
    <v-form class="my-4">
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field variant="outlined" prepend-inner-icon="mdi-format-title" label="Titúlo"></v-text-field>

                <v-text-field variant="outlined" prepend-inner-icon="mdi-text-box" label="Descrição breve"
                    single-line></v-text-field>

                <v-text-field variant="outlined" prepend-inner-icon="mdi-cash" label="Preço Venda"
                    type="number"></v-text-field>

                <v-date-input label="Data Criação" prepend-icon="" prepend-inner-icon="mdi-calendar"
                    variant="outlined"></v-date-input>
                <v-date-input label="Data Validade" prepend-icon="" prepend-inner-icon="mdi-calendar"
                    variant="outlined"></v-date-input>
            </v-col>
            <v-col cols="12" md="6" xs="3">
                <v-select clearable label="Cliente"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                    variant="outlined"></v-select>
                <v-select clearable label="Status"
                    :items="['ativo','inativo']"
                    variant="outlined"></v-select>
                <v-textarea clearable label="Descrição breve" variant="outlined"></v-textarea>

            </v-col>
        </v-row>
    </v-form>
</template>
<script setup>
import { VDateInput } from 'vuetify/labs/components';

</script>