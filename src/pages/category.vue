<template>
    <v-card class="my-2" hover>
        <v-img src="/public/productcategory.svg" max-height="400" cover></v-img>
    </v-card>
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