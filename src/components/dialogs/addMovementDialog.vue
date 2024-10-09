<template>
    <v-dialog v-model="props.dialog" max-width="800">
        <v-card prepend-icon="mdi-swap-horizontal" title="Informações de Movimentação">
            <v-card-text>
                <MovementTab />
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
import MovementTab from '../movement/movementTab.vue';

const props = defineProps({
    dialog: Boolean
})
</script>