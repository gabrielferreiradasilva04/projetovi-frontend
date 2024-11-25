<template>
  <v-dialog v-model="props.dialog" max-width="800">
    <v-card prepend-icon="mdi-sitemap" title="Informações de Produto">
      <v-card-text>
        <v-form ref="form" class="my-4 ga-3" v-on:submit.prevent="save">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field :readonly="props.editMode" :rules="rules" prepend-inner-icon="mdi-sitemap" label="Código"
                v-model="product.code"></v-text-field>
              <v-text-field :rules="rules" prepend-inner-icon="mdi-text-box" label="Descrição breve"
                v-model="product.description" single-line></v-text-field>
              <v-text-field :rules="rules" prepend-inner-icon="mdi-cash" label="Preço Custo" type="number"
                v-model="product.priceCost"></v-text-field>
              <v-text-field :rules="rules" prepend-inner-icon="mdi-cash" label="Preço Venda" v-model="product.salePrice"
                type="number"></v-text-field>
              <v-combobox :rules="rules" :readonly="props.editMode" prepend-inner-icon="mdi-weight"
                :clearable="!props.editMode" label="Unidade de medida" :items="unitMeasureStore.unitMeasures"
                v-model="product.unitMeasure" item-title="code"></v-combobox>
              <v-combobox hide-selected :rules="comboRules" prepend-inner-icon="mdi-account-group" multiple clearable
                label="Fornecedor" :items="supplierStore.suppliers" v-model="product.suppliers"
                item-title="name"></v-combobox>
              <v-combobox hide-selected :rules="rules" prepend-inner-icon="mdi-map-marker" clearable label="Localização"
                :items="locationStore.locations" v-model="product.location" item-title="title"></v-combobox>
            </v-col>
            <v-col cols="12" md="6" xs="3">
              <v-text-field :rules="rules" prepend-inner-icon="mdi-arrow-down-circle" type="number"
                v-model="product.minimumStock" label="Estoque Mínimo"></v-text-field>
              <v-text-field readonly prepend-inner-icon="mdi-calendar" label="Data de Registro"
                v-model:model-value="registrationDateFormatted"></v-text-field>
              <v-text-field readonly prepend-inner-icon="mdi-calendar" label="Data de atualização"
                v-model:model-value="updateDateFormatted"></v-text-field>
              <v-combobox hide-selected :rules="comboRules" prepend-inner-icon="mdi-diversify" multiple clearable
                label="Categoria" :items="categoryStore.categories" v-model="product.categories"
                item-title="description"></v-combobox>
              <v-combobox hide-selected :rules="comboRules" prepend-inner-icon="mdi-package" multiple clearable
                label="Depósito" :items="depositStore.deposits" v-model="product.deposits"></v-combobox>
              <v-file-input :rules="rules" accept="image/png, image/jpeg, image/bmp" prepend-icon=""
                prepend-inner-icon="mdi-camera" label="Foto do produto"></v-file-input>
              <v-card variant="text" class="d-flex justify-end">
                <v-switch v-model="product.active" color="primary" label="Ativo" hide-details></v-switch>
              </v-card>
            </v-col>
          </v-row>
          <VDivider />
          <div class="my-2 text-end">
            <v-btn class="mx-2" type="submit" variant="tonal" text="Salvar"></v-btn>
            <VDivider vertical />
            <v-btn variant="tonal" text="Fechar" @click="$emit('toogle')"></v-btn>
          </div>
        </v-form>
      </v-card-text>
      <VDivider />
    </v-card>
  </v-dialog>
  <CustomSnackbar :time="productStore.snackbarConfig.time" :color="productStore.snackbarConfig.color"
    :message="productStore.snackbarConfig.message" />
</template>
<script setup>
import { defineProps, defineEmits, reactive, ref, computed } from 'vue';
import { useDepositStore } from '@/stores/depositStore';
import { useCategoryStore } from '@/stores/categoryStore';
import { useSupplierStore } from '@/stores/supplierStore';
import { useLocationStore } from '@/stores/locationStore';
import { useUnitMeasureStore } from '@/stores/unitMeasureStore';
import { useProductStore } from '@/stores/productStore';
import { useDate } from 'vuetify';

const props = defineProps({
  dialog: Boolean,
  product: Object,
  editMode: Boolean
});
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
locationStore.listAll();
supplierStore.listAll();
depositStore.listAll();
categoryStore.listAll();
unitMeasureStore.listAll();

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
  product.deposits = [];
  product.location = null;
  product.categories = [];
  product.suppliers = [];

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
    emit('toogle');
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

</script>
