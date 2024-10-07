<template>
  <v-dialog v-model="props.dialog" max-width="800">
    <v-card prepend-icon="mdi-sitemap" title="Informações de Produto">
      <v-card-text>
        <ProductForm />
      </v-card-text>
      <VDivider />
      <v-card-actions>
        <v-btn variant="tonal" @click="$emit('toogle')" text="Salvar"></v-btn>
        <VDivider vertical/>
        <v-btn variant="tonal" text="Fechar" @click="$emit('toogle')"></v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>
</template>
<script setup>
import { defineProps } from 'vue';
import ProductForm from '../forms/productForm.vue';

const props = defineProps({
  dialog: Boolean
})
</script>

