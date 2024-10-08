<template>
    <v-form class="my-4">
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field variant="outlined" prepend-inner-icon="mdi-format-title" label="Título"></v-text-field>
                <v-text-field disabled variant="outlined" prepend-inner-icon="mdi-calendar" label="Data Cadastro"></v-text-field>
            </v-col>
            <v-col cols="12" md="6" xs="3">

                <v-textarea clearable label="Descrição" variant="outlined"></v-textarea>
                <VCard variant="text" class="d-flex justify-end">
                    <v-switch color="primary" label="Ativo" hide-details></v-switch>
                </VCard>

            </v-col>
        </v-row>
    </v-form>
</template>
<script setup>

</script>