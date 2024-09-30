<template>
    <v-data-table :headers="props.headers" :items="props.items" :search="search">

        <template v-slot:top>
            <v-toolbar flat class="pa-3">
                <v-text-field v-model="search" label="Pesquisar" prepend-inner-icon="mdi-magnify" variant="outlined"
                    hide-details single-line></v-text-field>

                <v-divider class="mx-4" inset vertical></v-divider>

                <v-btn>
                    <v-icon size="large">
                        mdi-plus
                    </v-icon>

                </v-btn>

            </v-toolbar>
        </template>

        <template v-slot:item.actions="{}">
            <v-icon class="me-2" size="small">
                mdi-pencil
            </v-icon>
            <v-icon size="small">
                mdi-delete
            </v-icon>
            
        </template>
    </v-data-table>
</template>

<script setup>
import { defineProps } from 'vue';
import {ref} from 'vue'

const props = defineProps({
    headers: Array,
    items: Array
})
const search = ref ('')

</script>