<template>
    <v-card variant="text" hover class="my-2">
        <v-img src="/public/suppliers.svg" cover max-height="400"></v-img>
    </v-card>
    <DefaultDataTable :headers="store.headers" :items="store.suppliers" :show-add="true"
        @addItem="toogleSupplierDialog" />
    <AddSupplierDialog :dialog="showSupplierDialog" @toogle="toogleSupplierDialog" />
</template>
<script setup>
import DefaultDataTable from '@/components/defaultDataTable.vue';
import AddSupplierDialog from '@/components/dialogs/addSupplierDialog.vue';
import { onMounted, ref } from 'vue'
import { useSupplierStore } from '@/stores/supplierStore';
const showSupplierDialog = ref(false)
const toogleSupplierDialog = () => {
    showSupplierDialog.value = !showSupplierDialog.value;
}
const store = useSupplierStore();

onMounted(() => {
    store.listAll();
});

</script>