<template>
    <v-data-table :headers="props.headers" :items="props.items" :search="search" no-data-text="Ops... Nada por aqui">
        <template v-slot:top>
            <v-toolbar flat class="pa-3" rounded>
                <v-text-field v-model="search" label="Pesquisar" prepend-inner-icon="mdi-magnify" variant="outlined"
                    hide-details single-line></v-text-field>

                <v-divider v-if="props.showAdd" class="mx-4" inset vertical></v-divider>

                <v-btn v-if="props.showAdd" variant="tonal">
                    Adicionar
                </v-btn>

            </v-toolbar>
        </template>

        <template v-slot:item.actions="{}">
            <div class="d-flex justfy-center">
                <v-btn size="small" variant="text">
                    <v-icon>
                        mdi-pencil
                    </v-icon>
                </v-btn>

                <v-btn size="small" variant="text">
                    <v-icon>
                        mdi-delete
                    </v-icon>
                </v-btn>
            </div>


        </template>
    </v-data-table>
</template>

<script setup>
import { defineProps } from 'vue';
import {ref} from 'vue'

const props = defineProps({
    headers: Array,
    items: Array,
    showAdd: Boolean
})

const search = ref ('')

</script>