<template>
    <v-card class="my-2" hover>
        <v-img src="/public/clientes.jpg" max-height="400" cover></v-img>
    </v-card>
    <DefaultDataTable :headers="store.headers" :items="store.clients" :show-add="true" @addItem="toogleClientDialog" />
    <AddClientDialog :dialog="showAddClientDialog" @toogle="toogleClientDialog" />
</template>
<script setup>
import DefaultDataTable from '@/components/defaultDataTable.vue';
import AddClientDialog from '@/components/dialogs/addClientDialog.vue';
import { onMounted, ref } from 'vue'
import { useClientStore } from '@/stores/clientStore';
const showAddClientDialog = ref(false)
const toogleClientDialog = () => {
    showAddClientDialog.value = !showAddClientDialog.value;
}
const store = useClientStore();
onMounted(() => {
    store.listAll();
})




</script>