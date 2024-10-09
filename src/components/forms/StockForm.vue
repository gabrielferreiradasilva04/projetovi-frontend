<template>
    <v-form class="my-4">
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field variant="outlined" prepend-inner-icon="mdi-format-title" label="Título"></v-text-field>

                <v-textarea clearable label="Descrição" variant="outlined"></v-textarea>

                <v-text-field disabled variant="outlined" prepend-inner-icon="mdi-calendar"
                    label="Data Cadastro"></v-text-field>
            </v-col>
            <v-col cols="12" md="6" xs="3">
                <v-text-field variant="outlined" prepend-inner-icon="mdi-map-marker" label="Endereço"></v-text-field>
                <v-text-field variant="outlined" prepend-inner-icon="mdi-account" label="Contato"></v-text-field>
                <v-text-field type="number" variant="outlined" prepend-inner-icon="mdi-package" label="Capacidade Total"></v-text-field>
            </v-col>
        </v-row>
    </v-form>
</template>
<script setup>

</script>