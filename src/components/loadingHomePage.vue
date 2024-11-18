<template>
    <v-container class="d-flex align-center justify-center" height="100vh">
        <v-expand-x-transition>
            <v-card max-width="300" elevation="12">
                <VCardTitle>
                    <v-img src="/public/loadingHome.svg" width="400" cover />
                </VCardTitle>
                <VCardText>
                    Carregando seus etoques...
                    <v-progress-linear color="primary" height="10" indeterminate rounded></v-progress-linear>
                </VCardText>
            </v-card>
        </v-expand-x-transition>
    </v-container>
</template>
<style lang="css" scoped></style>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
    setTimeout(() => {
        router.push('/home');
    }, 5000);

})

</script>