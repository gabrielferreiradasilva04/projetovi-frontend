<template>
    <DefaultDataTable :headers="catStore.headers" :items="catStore.categories" :show-add="true"
        @addItem="toogleCategoryDialog" />
    <AddCategoryDialog :dialog="showCategoryDialog" @toogle="toogleCategoryDialog" />
</template>
<script setup>
import DefaultDataTable from '@/components/defaultDataTable.vue';
import AddCategoryDialog from '@/components/dialogs/addCategoryDialog.vue';
import { onMounted, ref } from 'vue'
import { useCategoryStore } from '@/stores/categoryStore';

const showCategoryDialog = ref(false);
const toogleCategoryDialog = () => {
    showCategoryDialog.value = !showCategoryDialog.value
}

const catStore = useCategoryStore();

onMounted(() => {
    catStore.listAll();
})
</script>