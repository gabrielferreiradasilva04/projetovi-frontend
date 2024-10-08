<template>
    <v-form class="my-4">
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field variant="outlined" prepend-inner-icon="mdi-account" label="Primeiro Nome"></v-text-field>

                <v-text-field variant="outlined" prepend-inner-icon="mdi-account" label="Último Nome"
                    single-line></v-text-field>

                <v-text-field variant="outlined" prepend-inner-icon="mdi-phone" label="Telefone"></v-text-field>
                <v-text-field variant="outlined" prepend-inner-icon="mdi-email" label="E-mail"></v-text-field>

            </v-col>
            <v-col cols="12" md="6" xs="3">
                <v-text-field disabled variant="outlined" prepend-inner-icon="mdi-calendar"
                    label="Data Cadastro"></v-text-field>
                <v-text-field disabled variant="outlined" prepend-inner-icon="mdi-calendar"
                    label="Data Atualização"></v-text-field>
                <v-textarea clearable label="Observações" variant="outlined"></v-textarea>
                <VCard variant="text" class="d-flex justify-end">
                    <v-switch color="primary" label="Ativo" hide-details></v-switch>
                </VCard>

            </v-col>
        </v-row>
    </v-form>
</template>
<script setup>

</script>