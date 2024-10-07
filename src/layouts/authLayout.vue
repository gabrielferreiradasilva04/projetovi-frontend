<template>
    <v-container min-height="100vh">
        <div id="top-div" class="justify-end">
            <div>
                <img id="logo-img" src="/public/icone_escrito_semfundo.png" alt="icone" class="small-logo">
            </div>
        </div>
        <RouterView></RouterView>
    </v-container>

</template>

<script setup>

</script>

<style scoped>
#top-div {
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
}

.small-logo {
    width: 100px;
    height: auto;
}
</style>