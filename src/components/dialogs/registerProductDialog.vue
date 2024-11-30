<template>
  <v-dialog v-model="props.dialog" max-width="800">
    <v-card prepend-icon="mdi-sitemap" title="Informações de Produto">
      <v-card-text>
        <v-form ref="form" class="my-4 ga-3" v-on:submit.prevent="save">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field :readonly="props.editMode" :rules="rules" prepend-inner-icon="mdi-sitemap" label="Código"
                v-model="product.code"></v-text-field>
              <v-textarea :rules="rules" prepend-inner-icon="mdi-text-box" label="Descrição e características"
                v-model="product.description" single-line></v-textarea>

              <v-text-field :rules="rules" prepend-inner-icon="mdi-cash" label="Preço Custo" type="number"
                v-model="product.priceCost"></v-text-field>
              <v-text-field :rules="rules" prepend-inner-icon="mdi-cash" label="Preço Venda" v-model="product.salePrice"
                type="number"></v-text-field>
              <v-text-field :rules="rules" prepend-inner-icon="mdi-arrow-down-circle" type="number"
                v-model="product.minimumStock" label="Estoque Mínimo"></v-text-field>
            </v-col>
            <v-col cols="12" md="6" xs="3">
              <v-combobox :rules="rules" prepend-inner-icon="mdi-tag" label="Marca do produto"
                :items="brandStore.brands" v-model="product.brand" item-title="name"></v-combobox>
              <v-combobox :rules="rules" :readonly="props.editMode" prepend-inner-icon="mdi-weight"
                :clearable="!props.editMode" label="Unidade de medida" :items="unitMeasureStore.unitMeasures"
                v-model="product.unitMeasure" item-title="code"></v-combobox>
              <v-text-field readonly prepend-inner-icon="mdi-calendar" label="Data de Registro"
                v-model:model-value="registrationDateFormatted"></v-text-field>
              <v-text-field readonly prepend-inner-icon="mdi-calendar" label="Data de atualização"
                v-model:model-value="updateDateFormatted"></v-text-field>
              <v-combobox placeholder="selecione uma ou mais categorias" hide-selected :rules="comboRules"
                prepend-inner-icon="mdi-diversify" multiple clearable label="Categoria"
                :items="categoryStore.categories" v-model="product.categories" item-title="description"></v-combobox>
              <v-combobox hide-selected :rules="rules" prepend-inner-icon="mdi-map-marker" clearable label="Localização"
                :items="locationStore.locations" v-model="product.location" item-title="title"></v-combobox>
              <v-card variant="text" class="d-flex justify-end">
                <v-switch v-model="product.active" color="primary" label="Ativo" hide-details></v-switch>
              </v-card>
            </v-col>
          </v-row>
          <VDivider />
          <div class="my-2 text-end">
            <v-btn elevation="5" class="mx-2" type="submit" color="success" text="Salvar"></v-btn>
            <VDivider vertical />
            <v-btn elevation="5" variant="tonal" text="Fechar" @click="$emit('toogle')"></v-btn>
          </div>
        </v-form>
      </v-card-text>
      <VDivider />
    </v-card>
  </v-dialog>
  <v-snackbar v-model="showSnack" :timeout="productStore.snackbarConfig.time" :color="productStore.snackbarConfig.color"
    location="top right" elevation="2">
    {{ productStore.snackbarConfig.message }}
  </v-snackbar>
</template>
<script setup>
import { defineProps, defineEmits, reactive, ref, computed } from 'vue';
import { useDepositStore } from '@/stores/depositStore';
import { useCategoryStore } from '@/stores/categoryStore';
import { useSupplierStore } from '@/stores/supplierStore';
import { useLocationStore } from '@/stores/locationStore';
import { useUnitMeasureStore } from '@/stores/unitMeasureStore';
import { useProductStore } from '@/stores/productStore';
import { useBrandStore } from '@/stores/brandStore';
import { useDate } from 'vuetify';
import { setTimeout } from 'core-js';


const props = defineProps({
  dialog: Boolean,
  product: Object,
  editMode: Boolean
});

//
const showSnack = ref(false);
//datas
const dateComponent = useDate();
const registrationDateFormatted = computed(() => {
  if (props.editMode) {
    return dateComponent.format(product.registrationDate, 'keyboardDate');
  }
});

const updateDateFormatted = computed(() => {
  if (props.editMode) {
    return dateComponent.format(product.updateDate, 'keyboardDateTime')
  }
});


const depositStore = useDepositStore();
const categoryStore = useCategoryStore();
const supplierStore = useSupplierStore();
const locationStore = useLocationStore();
const unitMeasureStore = useUnitMeasureStore();
const productStore = useProductStore();
const brandStore = useBrandStore();
locationStore.listAll();
supplierStore.listAll();
depositStore.listAll();
categoryStore.listAll();
unitMeasureStore.listAll();
brandStore.listAll();

//variavies de seleção
const product = reactive({ ...props.product });
const emit = defineEmits(['toogle']);
function resetProduct() {
  product.id = '';
  product.code = '';
  product.description = '';
  product.priceCost = 0;
  product.salePrice = 0;
  product.minimumStock = 0;
  product.active = false;
  product.unitMeasure = null;
  product.stock = null;
  product.location = null;
  product.categories = [];
  product.brand = null;
}
const rules = [
  v => !!v || 'Campo obrigatório',
];
const comboRules = [
  v => (v && v.length > 0) || 'Campo obrigatório',
]


//metodos
const form = ref(null);
async function save() {
  const { valid } = await form.value.validate();
  if (valid) {
    if (product.id === null || product.id === '') {
      productStore.save(product);
    } else {
      productStore.update(product);
    }
  }
}
watch(() => props.dialog, (newDialogState) => {
  if (!newDialogState) {
    resetProduct();
  }
})
watch(() => props.product, (newProduct) => {
  Object.assign(product, newProduct);
});

watch(
  () => productStore.snackbarConfig.message,
  (newMessage) => {

    showSnack.value = newMessage !== '';
    setTimeout(() => {
      productStore.clearSnackBarMessage();
    }, 2000);
  }
);

</script>
