<template>
    <v-card class="text-center pa-4" hover>
        <v-avatar border size="200">
            <v-img src="/public/icone.ico"></v-img>
        </v-avatar>
        <v-divider class="ma-2"></v-divider>
        <v-card-actions>
            <v-btn>editar Foto</v-btn>
            <v-btn>Excluir Foto</v-btn>
        </v-card-actions>
    </v-card>
    <v-card class="pa-2 my-2" hover>
        <v-form>
            <v-row>
                <v-col>
                    <v-text-field variant="outlined" prepend-inner-icon="mdi-account"
                        label="Primeiro nome"></v-text-field>
                    <v-text-field variant="outlined" prepend-inner-icon="mdi-calendar" label="Nickname"></v-text-field>

                    <v-text-field variant="outlined" prepend-inner-icon="mdi-phone" label="Telefone"></v-text-field>

                    <v-text-field variant="outlined" prepend-inner-icon="mdi-calendar"
                        label="Data de Registro"></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field prepend-inner-icon="mdi-account" variant="outlined"
                        label="Último nome"></v-text-field>

                    <v-text-field prepend-inner-icon="mdi-email" variant="outlined" placeholder="jhon@outlook.com"
                        type="email" label="E-mail"></v-text-field>

                    <v-text-field prepend-inner-icon="mdi-calendar" variant="outlined" type="email"
                        label="Última atualização"></v-text-field>
                    <v-card-actions class="justify-end">
                        <v-btn variant="tonal" >Alterar senha</v-btn>
                    </v-card-actions>

                </v-col>
            </v-row>
        </v-form>

    </v-card>

</template>
<script setup>

</script>