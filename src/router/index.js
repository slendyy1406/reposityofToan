import { createWebHistory, createRouter } from 'vue-router'

// import About from '../components/About.vue'
import Products from '../components/Products.vue'
import Product from '../components/Product.vue'
import HomePage from '../components/HomePage.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import DetailProduct from '../components/DetailProduct.vue'
import About from '../components/About.vue'
// tạo mảng chứa những đường link
const routes = [
    // trang load lên đầu tiên thì path chỉ là /
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/products',
        name: 'Product',
        component: Products,
    },
    {
        path: '/product',
        name: 'Product',
        component: Product,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/shopping-cart',
        name: 'ShoppingCart',
        component: ShoppingCart,
    },
    {
        path: '/detail-product/:id',
        name: 'DetailProduct',
        component: DetailProduct,
    },
]
// tạo đối tượng router
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
