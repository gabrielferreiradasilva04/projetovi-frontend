<template>
    <v-snackbar v-model="show" :timeout="props.time" :color="props.color" location="top right" elevation="2">
        {{ props.message }}
    </v-snackbar>
</template>

<script setup>
import { defineProps } from 'vue';
import { ref } from 'vue';

const show = ref(false);

const props = defineProps({
    color: String,
    message: String,
    time: Number,
});

watch(
  () => props.message,
  (newValue) => {
    if (newValue) {
      show.value = true;
    }
  }
);
</script>