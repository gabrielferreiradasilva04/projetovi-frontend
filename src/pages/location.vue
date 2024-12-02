<template>

    <DefaultDataTable :headers="store.headers" :items="store.locations" :show-add="true"
        @addItem="toogleDialogLocation" />
    <AddLocationDialog :dialog="showDialogLocation" @toogle="toogleDialogLocation" />
</template>
<script setup>
import DefaultDataTable from '@/components/defaultDataTable.vue';
import AddLocationDialog from '@/components/dialogs/addLocationDialog.vue';
import { onMounted, ref } from 'vue'
import { useLocationStore } from '@/stores/locationStore';

const showDialogLocation = ref(false)
const toogleDialogLocation = () => {
    showDialogLocation.value = !showDialogLocation.value;
}
const store = useLocationStore();

onMounted(() => {
    store.listAll();
})



</script>
