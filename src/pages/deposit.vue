<template>
    <v-card variant="text" hover class="my-2">
        <v-img src="/public/deposito.jpg" cover max-height="400"></v-img>
    </v-card>
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
