<template>

    <DefaultDataTable :headers="movementStore.headers" :items="movementStore.movements" :show-add="true"
        @addItem="toogleMovementDialog" />
    <RegisterMovementDialog :dialog="showMovementDialog" @toogle="toogleMovementDialog" />
</template>
<script setup>
import DefaultDataTable from '@/components/defaultDataTable.vue';
import RegisterMovementDialog from '@/components/dialogs/registerMovement.vue';
import { ref } from 'vue';
const showMovementDialog = ref(false);
const toogleMovementDialog = () => {
    showMovementDialog.value = !showMovementDialog.value;
}
import { useMovementStore } from '@/stores/movementStore';
const movementStore = useMovementStore();
//carregar dados
movementStore.listAll();



</script>