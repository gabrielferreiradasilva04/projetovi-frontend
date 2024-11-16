import { defineStore } from "pinia";
import { api } from "@/services/axiosConfig";
import { useStockStore } from "./stockStore";

export const useProductStore = defineStore('product', {
    state: () => ({
        currentProduct: null,
        products: [],
        snackbarConfig: {
            time: 0,
            message: '',
            color: ''
        },
    }),
    actions: {
        async save(product) {
            if (product === null) {
                this.snackbarConfig = {
                    message: 'Produto inválido',
                    color: 'error',
                    time: 20000
                };
                return;
            }
            if (product) {
                const stockStore = useStockStore();

                const productData = {
                    code: product.code,
                    description: product.description,
                    priceCost: product.priceCost,
                    minimumStock: product.minimumStock,
                    active: product.active,
                    unitMeasure: product.unitMeasure,
                    quantityStock: product.quantityStock,
                    categories: product.categories,
                    deposits: product.deposits,
                    location: product.location,
                    stock: {},
                }

                productData.stock = stockStore.currentStock;

                
            }
        }
    }
})