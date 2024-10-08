<template>
    <v-form class="my-4">
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field variant="outlined" prepend-inner-icon="mdi-sitemap" label="Código"></v-text-field>
                <v-text-field variant="outlined" prepend-inner-icon="mdi-text-box" label="Descrição breve"
                    single-line></v-text-field>
                <v-text-field variant="outlined" prepend-inner-icon="mdi-cash" label="Preço Custo"
                    type="number"></v-text-field>
                <v-text-field variant="outlined" prepend-inner-icon="mdi-cash" label="Preço Venda"
                    type="number"></v-text-field>
                <v-text-field variant="outlined" prepend-inner-icon="mdi-weight-kilogram"
                    label="Unidade de Medida"></v-text-field>
                <v-combobox prepend-inner-icon="mdi-account-group" multiple clearable label="Fornecedor"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                    variant="outlined"></v-combobox>
                <v-combobox prepend-inner-icon="mdi-map-marker" multiple clearable label="Localização"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                    variant="outlined"></v-combobox>
            </v-col>
            <v-col cols="12" md="6" xs="3">
                <v-text-field variant="outlined" prepend-inner-icon="mdi-arrow-down-circle"
                    label="Estoque Mínimo"></v-text-field>
                <v-text-field disabled variant="outlined" prepend-inner-icon="mdi-calendar"
                    label="Data de Registro"></v-text-field>
                <v-text-field disabled variant="outlined" prepend-inner-icon="mdi-calendar"
                    label="Data de atualização"></v-text-field>
                <v-combobox prepend-inner-icon="mdi-diversify" multiple clearable label="Categoria"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                    variant="outlined"></v-combobox>
                <v-combobox prepend-inner-icon="mdi-package" multiple clearable label="Depósito"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                    variant="outlined"></v-combobox>
                <v-file-input accept="image/png, image/jpeg, image/bmp" prepend-icon="" prepend-inner-icon="mdi-camera"
                    variant="outlined" label="Foto do produto"></v-file-input>
                <v-card variant="text" class="d-flex justify-end">
                    <v-switch color="primary" label="Ativo" hide-details></v-switch>
                </v-card>
            </v-col>
        </v-row>
    </v-form>
</template>
<script setup>

</script>