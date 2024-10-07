<template>
    <v-card class="text-center pa-4" >
        <v-avatar border size="200">
            <v-img src="/public/icone.ico"></v-img>
        </v-avatar>
        <v-divider class="ma-2"></v-divider>
        <v-card-actions>
            <v-btn variant="tonal">Editar Foto</v-btn>
            <v-btn variant="tonal">Excluir Foto</v-btn>
        </v-card-actions>
    </v-card>

    <v-form class="my-4">
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field variant="outlined" prepend-inner-icon="mdi-account" label="Primeiro nome"></v-text-field>
                <v-text-field variant="outlined" prepend-inner-icon="mdi-calendar" label="Nickname"></v-text-field>
                <v-text-field variant="outlined" prepend-inner-icon="mdi-phone" label="Telefone"></v-text-field>
                <v-text-field variant="outlined" prepend-inner-icon="mdi-calendar"
                    label="Data de Registro"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
                <v-text-field prepend-inner-icon="mdi-account" variant="outlined" label="Último nome"></v-text-field>
                <v-text-field prepend-inner-icon="mdi-email" variant="outlined" placeholder="jhon@outlook.com"
                    type="email" label="E-mail"></v-text-field>
                <v-text-field prepend-inner-icon="mdi-calendar" variant="outlined"
                    label="Última atualização"></v-text-field>
                <v-card-actions class="justify-end">
                    <v-btn variant="tonal">Alterar senha</v-btn>
                    <v-btn variant="tonal">Inativar conta</v-btn>
                </v-card-actions>
            </v-col>
        </v-row>
    </v-form>
</template>

<script setup>

</script>