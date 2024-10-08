<template>
    <v-card variant="text">
        <v-tabs v-model="tab" bg-color="primary">
            <v-tab value="entry">Entrada</v-tab>
            <v-tab value="exit">Saída</v-tab>
        </v-tabs>
        <v-card-text>
            <v-tabs-window v-model="tab">
                <v-tabs-window-item value="entry">
                    <EntryMovement />
                </v-tabs-window-item>

                <v-tabs-window-item value="exit">
                    <ExitMovement />
                </v-tabs-window-item>
            </v-tabs-window>
        </v-card-text>
    </v-card>
</template>

<script setup>
import { ref } from 'vue';
import EntryMovement from './entryMovement.vue';
import ExitMovement from './exitMovement.vue';

const tab = ref(null);

</script>