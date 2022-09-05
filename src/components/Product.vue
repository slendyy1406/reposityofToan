<template>
  <section class="menu container-fluid" id="menu">
    <div class="container">

        <div style="display: flex; padding-top: 70px ; justify-content: space-between;">


        <p class="text-white" style="display: flex; gap: 1rem; padding: 10px 30px; ">
        SORT BY: 
        <button class="btn btn-outline-warning" @click="handleSort('price')">Price</button>
        <button class="btn btn-outline-success" @click="handleSort('name')">Name</button>
      </p>

        <div></div>

          <form @submit.prevent="search()">
          <div class="input-group">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          v-model="searchQuery"
        />
        <button type="button" class="btn btn-outline-primary">search</button>
        </div>
        </form>


        </div>

      <div class="box-container">
        <div class="box" v-for="prod of products" :key="prod.id">
          <router-link :to="{ name: 'DetailProduct', params: { id: prod.id } }">
            <img
              :src="require('../assets/images/' + prod.image)"
              class="card-img-top"
              alt="..."
            />
            <h3>{{ prod.name }}</h3>
          </router-link>

          <h6>{{ prod.description }}</h6>
          <div class="price">{{ prod.price }} $</div>
          <a
            href="#"
            class="btn btn-warning btn-block"
            @click="handleUpdateCart(prod)"
            >Add to cart</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

import axios from "axios";

export default {
  name: "Product",
  data() {
    return {
      products: [],
      searchQuery: "",
    };
  },
  mounted() {
    this.search()
  },
  methods: {
    ...mapActions(["updateCart"]),
    handleUpdateCart(product) {
      const data = {
        action: "ADD_TO_CART",
        value: product,
      };
      this.updateCart(data);
    },
    search() {
      try {
        axios.get(`http://localhost:3000/products?q=${this.searchQuery}`).then((res) => {
          console.log(this.searchQuery);
          this.products = res.data;
          this.loading = false;
        })
      } catch (e) {
        console.error(e);
      }
    },
    handleSort(sortby){
      try {
        axios.get(`http://localhost:3000/products?_sort=${sortby}`).then((res) => {
          this.products = res.data;
          this.loading = false;
        })
      } catch (e) {
        console.error(e);
      }
    }
  },
  computed: {
    handleIMG() {
      console.log("this.product", this.product);
      return {
        ...this.product,
        image: `require('@${this.product.image}')`,
      };
    },

  }
};
</script>

<style>
.menu .box-container {
  display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
    background-color: #010103;
}

.menu .box-container .box {
  padding: 2rem;
  text-align: center;
  border: 1px solid white;
  margin: 3rem 0 2rem 0;
  text-decoration: none;
}

form{
  width: 300px;
}

.menu .box-container .box img {
  height: 8rem;
}

.menu .box-container .box h3 {
  color: lightgray;
  font-weight: bolder;
  font-size: 2rem;
  padding: 1rem 0;
}
.menu .box-container .box h3:hover {
  color: black;
}
.menu .box-container .box a {
  text-decoration: none;
}

.menu .box-container .box h6 {
  color: #fff;
  font-size: 1rem;
  padding: 1rem 0;
}

.menu .box-container .box .price {
  color: #fff;
  font-size: 1.3rem;
  padding: 0.3rem 0;
}

.menu .box-container .box .price span {
  font-size: 1.5rem;
  text-decoration: line-through;
  font-weight: lighter;
}

.menu .box-container .box:hover {
  background: #fff;
}

.menu .box-container .box:hover > * {
  color: black;
}
#menu-btn {
  display: inline-block;
}
</style>
