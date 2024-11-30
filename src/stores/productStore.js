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
        headers: [
            { title: 'Código', key: 'code' },
            { title: 'Un. Med', key: 'unitMeasure.code' },
            { title: 'Valor Venda', key: 'salePrice' },
            { title: 'Loc', key: 'location.title' },
            { title: 'Ações', key: 'actions', sortable: false, align: 'center' },
        ],
        menuItems: [
            { title: 'Despositos e Produtos', icon: 'mdi-package-variant-closed' },
            { title: 'Fornecedores e Produtos', icon: 'mdi-account' },
            { title: 'Fotos e Produtos', icon: 'mdi-camera' }
        ]
    }),
    actions: {
        addProductOnProductsList(product) {
            this.products.push(product);
        },
        updateProductOnProductsList(product) {
            let oldProductIndex = this.products.findIndex(item => item.id === product.id);
            if (oldProductIndex != -1) {
                this.products.splice(oldProductIndex, 1, product);
            }
        },
        setSnackBarMessage(message) {
            this.snackbarConfig.message = message;
        },
        clearSnackBarMessage() {
            this.snackbarConfig.message = '';
        },
        async findAll() {
            const request = await api.get('/products', { withCredentials: true });

            if (request.status === 200) {
                this.products = request.data;
            } else {
                this.products = [];
                this.snackbarConfig = {
                    message: 'Erro ao buscar produtos',
                    color: 'error',
                    time: 20000
                };
            }
        },
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
                    salePrice: product.salePrice,
                    minimumStock: product.minimumStock,
                    active: product.active,
                    unitMeasure: product.unitMeasure,
                    quantityStock: product.quantityStock,
                    categories: product.categories,
                    deposits: product.deposits,
                    location: product.location,
                    suppliers: product.suppliers,
                    brand: product.brand,
                    stock: {},
                }

                productData.stock = stockStore.currentStock;
                try {
                    const request = await api.post('/products', productData, { withCredentials: true });

                    if (request.status === 200) {
                        this.snackbarConfig = {
                            message: 'Salvo com sucesso',
                            color: 'success',
                            time: 2000
                        };

                        this.addProductOnProductsList(request.data);

                    } else {
                        this.snackbarConfig = {
                            message: 'Produto Inválido',
                            color: 'warning',
                            time: 2000
                        };
                    }
                } catch (error) {
                    if (error.response) {
                        if (error.response.status === 403) {
                            this.snackbarConfig = {
                                message: 'Não autorizado',
                                time: 2000,
                                color: 'error'
                            }
                        } else if (error.response.status === 404) {
                            this.snackbarConfig = {
                                message: 'Não autorizado',
                                time: 2000,
                                color: 'error'
                            }
                        }
                        else {
                            this.snackbarConfig = {
                                message: error.response.data.message,
                                time: 2000,
                                color: 'error'
                            }
                            console.log(error)
                        }
                    } else {
                        this.snackbarConfig = {
                            message: 'Tente novamente mais tarde',
                            time: 2000,
                            color: 'warning'
                        }
                    }
                }

            }
        },
        async update(product) {
            if (product === null) {
                this.snackbarConfig = {
                    message: 'Produto inválido',
                    color: 'error',
                    time: 2000
                };
                return;
            }
            if (product) {
                const stockStore = useStockStore();

                const productData = {
                    id: product.id,
                    code: product.code,
                    description: product.description,
                    priceCost: product.priceCost,
                    salePrice: product.salePrice,
                    minimumStock: product.minimumStock,
                    active: product.active,
                    unitMeasure: product.unitMeasure,
                    quantityStock: product.quantityStock,
                    categories: product.categories,
                    deposits: product.deposits,
                    location: product.location,
                    suppliers: product.suppliers,
                    brand: product.brand,
                    stock: {},
                }

                productData.stock = stockStore.currentStock;
                try {
                    const productId = productData.id;

                    const request = await api.put('/products/' + productId, productData, { withCredentials: true });

                    if (request.status === 200) {
                        this.snackbarConfig = {
                            message: 'Atualizado com sucesso',
                            color: 'success',
                            time: 2000
                        };

                        this.updateProductOnProductsList(request.data);

                    } else {
                        this.snackbarConfig = {
                            message: 'Produto Inválido',
                            color: 'succes',
                            time: 2000
                        };
                    }
                } catch (error) {
                    if (error.response) {
                        if (error.response.status === 403) {
                            this.snackbarConfig = {
                                message: 'Não autorizado',
                                time: 2000,
                                color: 'error'
                            }
                        } else {
                            this.snackbarConfig = {
                                message: error.response.data.message,
                                time: 2000,
                                color: 'error'
                            }
                            console.log(error)
                        }
                    } else {
                        this.snackbarConfig = {
                            message: 'Tente novamente mais tarde',
                            time: 2000,
                            color: 'warning'
                        }
                    }
                }

            }
        }
    }
})