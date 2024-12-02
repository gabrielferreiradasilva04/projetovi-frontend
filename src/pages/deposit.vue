<template>

    <DefaultDataTable :headers="store.headers" :items="store.deposits" :show-add="true"
        @addItem="toogleDepositDialog" />
    <AddDepositDialog :dialog="showDepositDialog" @toogle="toogleDepositDialog" />
</template>
<script setup>
import DefaultDataTable from '@/components/defaultDataTable.vue';
import AddDepositDialog from '@/components/dialogs/addDepositDialog.vue';
import { onMounted, onUnmounted, ref } from 'vue'
import { useDepositStore } from '@/stores/depositStore';

const showDepositDialog = ref(false);

const toogleDepositDialog = () => {
    showDepositDialog.value = !showDepositDialog.value;
}

const store = useDepositStore();

onMounted(() => {
    store.listAll();
})
</script>
