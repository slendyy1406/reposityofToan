<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div>
        <Header :cart="cart" />
        <!-- <HomePage /> -->
        <router-view />
        <Footer />
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
// import HomePage from './components/HomePage.vue'
import Footer from './components/Footer.vue'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from '../src/firebase'
import { mapActions } from 'vuex'
export default {
    name: 'App',
     mounted(){
        onAuthStateChanged(auth,(user)=>{
        console.log(user);  
        this.handleLogin(user);
    })
    },
    components: {
        // HelloWorld,
        Header,
        Footer,
        // HomePage,
        
    },
    data() {
        return {
            cart: 1,
        }
    },
    methods: {
        ...mapActions(['login']),
        handleLogin(user){
            const data = {
                action: 'LOGIN',
                value: user
            }
            console.log(user)
            console.log(data)
            this.login(data)
        }
    }
}

    
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
}
</style>
