<template>
    <v-card>
        <v-data-table :headers="props.headers" :items="props.items" :search="search"
            no-data-text="Ops... Nada por aqui">
            <template v-slot:top>
                <v-toolbar :color="colors.deepPurple.darken1" flat class="pa-3" rounded>
                    <v-text-field v-model="search" label="Pesquisar" prepend-inner-icon="mdi-magnify" variant="outlined"
                        hide-details single-line></v-text-field>

                    <v-divider vertical inset class="mx-4" v-if="props.showProductMenu">
                    </v-divider>
                    <template v-for="(item, i) in productMenuItems" :key="i" :value="i">
                        <VBtn @click="$emit('menuItemClick', i)" :icon="item.icon" v-tooltip:bottom="item.title"></VBtn>
                        <v-divider vertical inset class="mx-4" v-if="i < productMenuItems.length - 1">
                        </v-divider>
                    </template>

                    <v-divider v-if="props.showAdd" class="mx-4" inset vertical></v-divider>
                    <v-btn v-if="props.showAdd" @click="$emit('addItem')" text="Adicionar" prepend-icon="mdi-plus"
                        variant="tonal" />
                    <v-divider v-if="props.showProductMenu" class="mx-4" inset vertical></v-divider>
                </v-toolbar>
            </template>

            <template v-slot:item.actions="{ item }">
                <div class="text-center ga-2">
                    <v-btn class="mx-2" color="success" @click="$emit('update', item)" size="small">
                        <v-icon>
                            mdi-pencil
                        </v-icon>
                    </v-btn>
                    <v-btn color="error" @click="$emit('delete')" size="small">
                        <v-icon>
                            mdi-delete
                        </v-icon>
                    </v-btn>
                </div>
            </template>
        </v-data-table>
    </v-card>
</template>

<script setup>
import colors from 'vuetify/util/colors'
import { defineProps } from 'vue';
import { ref } from 'vue'
import { color } from 'chart.js/helpers';

const props = defineProps({
    headers: Array,
    items: Array,
    showAdd: Boolean,
    showProductMenu: Boolean,
    productMenuItems: Array
})



const search = ref('')

</script>