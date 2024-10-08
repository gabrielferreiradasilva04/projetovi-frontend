<template>
    <v-dialog v-model="props.dialog" max-width="800">
        <v-card prepend-icon="mdi-package" title="Informações de Depósito">
            <v-card-text>
                <DepositForm />
            </v-card-text>
            <VDivider />
            <v-card-actions>
                <v-btn variant="tonal" @click="$emit('toogle')" text="Salvar"></v-btn>
                <VDivider vertical />
                <v-btn variant="tonal" text="Fechar" @click="$emit('toogle')"></v-btn>
            </v-card-actions>
        </v-card>

    </v-dialog>
</template>
<script setup>
import { defineProps } from 'vue';
import DepositForm from '../forms/depositForm.vue';

const props = defineProps({
    dialog: Boolean
})
</script>