<template>
    <v-form class="my-4">
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field prepend-inner-icon="mdi-account" label="Nome"></v-text-field>
                <v-text-field prepend-inner-icon="mdi-account" v-mask="'###.###.###-##'" label="CNPJ"
                    single-line></v-text-field>

                <v-text-field prepend-inner-icon="mdi-map-marker" label="Endereço"></v-text-field>
                <v-text-field prepend-inner-icon="mdi-phone" label="Telefone"></v-text-field>
                <v-text-field prepend-inner-icon="mdi-email" label="E-mail"></v-text-field>
                <v-text-field prepend-inner-icon="mdi-web" label="Site"></v-text-field>


            </v-col>
            <v-col cols="12" md="6" xs="3">
                <v-text-field disabled prepend-inner-icon="mdi-calendar" label="Data Cadastro"></v-text-field>
                <v-text-field disabled prepend-inner-icon="mdi-calendar" label="Data Atualização"></v-text-field>

                <v-text-field prepend-inner-icon="mdi-account" disabled label="Usuário Responsável"></v-text-field>
                <v-textarea clearable label="Observações"></v-textarea>
                <VCard variant="text" class="d-flex justify-end">
                    <v-switch color="primary" label="Ativo" hide-details></v-switch>
                </VCard>

            </v-col>
        </v-row>
    </v-form>
</template>
<script setup>
import { VDateInput } from 'vuetify/labs/components';

</script>