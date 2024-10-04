<template>
    <v-img class="mx-auto my-2" max-width="230" src="/public/icone_secundario_semfundo.png"></v-img>
    <v-card class="mx-auto pa-12 pb-2" elevation="12" max-width="448" rounded="lg">

        <v-text-field density="compact" placeholder="Primeiro nome" variant="outlined"></v-text-field>

        <v-text-field density="compact" placeholder="Último nome" variant="outlined"></v-text-field>

        <v-text-field density="compact" placeholder="Apelido/Nickname" variant="outlined"></v-text-field>

        <v-text-field density="compact" placeholder="E-mail" variant="outlined"></v-text-field>

        <v-text-field density="compact" placeholder="Telefone" variant="outlined"></v-text-field>

        <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
            density="compact" placeholder="Senha" prepend-inner-icon="mdi-lock-outline" variant="outlined"
            @click:append-inner="visible = !visible">
        </v-text-field>

        <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
            density="compact" placeholder="Repita sua senha" prepend-inner-icon="mdi-lock-outline" variant="outlined"
            @click:append-inner="visible = !visible">
        </v-text-field>

        <v-btn @click="toggle" variant="text" class="my-2" block>
            Termos e condições de uso<v-icon icon="mdi-chevron-right"></v-icon>
        </v-btn>

        <v-checkbox label="Concordo com os termos e condições" type="checkbox" value="1" v-model="combo_validation"
            :rules="[() => !!combo_validation || 'Campo obrigatório']"></v-checkbox>

        <v-divider class="ma-2"></v-divider>
        <div>
            <v-btn class="mb-8" color="primary" size="large" variant="tonal" block>
                Finalizar cadastro
            </v-btn>

            <v-card-text class="text-center">
                <a class="text-blue text-decoration-none" href="/login" rel="noopener noreferrer" target="_self">
                    Já tenho uma conta <v-icon icon="mdi-chevron-right"></v-icon>
                </a>
            </v-card-text>
        </div>

    </v-card>

    <Terms :dialog="showTermsDialog" @toggle="toggle" />

</template>

<script setup>
import Terms from '@/components/terms.vue';
import { ref } from 'vue';
const visible = ref(false)
const combo_validation = ref(Boolean)

const showTermsDialog = ref(false);

const toggle = () => {
    showTermsDialog.value = !showTermsDialog.value;
}


</script>