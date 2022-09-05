<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row box-product">
            <Product
                v-for="product in filterProducts"
                :key="product.id"
                :product="product"
                class="col-4"
            />
        </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Product from './Product.vue'

export default {
    name: 'HomePage',
    mounted() {
        this.$store.dispatch('loadCourses')
    },
    components: {
        Product,
    },
    methods: {
        logger() {
            console.log('logger', typeof this.searchValue)
        },
    },
    computed: {
        ...mapGetters(['products', 'searchValue']),
        // ...mapActions(['getProductsAPI']),
        // ...mapState(['productsAPI']),
        filterProducts() {
            if (!this.searchValue) {
                return this.products
            } else {
                const filterName = this.products.filter(item =>
                    item.name
                        .toLowerCase()
                        .includes(this.searchValue.toLowerCase())
                )
                if (filterName.length == 0) {
                    return this.products.filter(
                        item => item.price == this.searchValue
                    )
                } else {
                    return filterName
                }
            }
        },
    },
}
</script>

<style>
.container-fluid{
    background-color: black;
}
</style>
