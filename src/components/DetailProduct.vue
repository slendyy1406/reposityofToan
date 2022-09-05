<template>
  <div class="container-fluid bg-white mt-4 mb-4">

    <div class="card" v-if="prod">
      <div class="container">
        <div class="wrapper row">
          <div class="preview col-md-6 imgs">
            <div class="preview-pic tab-content">
              <div class="tab-pane active pic">
                <img :src="require('../assets/images/' + prod?.pic)" />
              </div>
            </div>
          </div>
          <div class="details col-md-6">
            <div class="product-title">
              {{ prod?.name }}
            </div>
            <hr>
            <h4 class="price">
               Price:
              <span>${{ prod?.price }}</span>
            </h4>
            
            <p class="product-description">
              {{ prod?.description }}
            </p>
            
            <!-- <p class="vote">
              <strong>91%</strong> of buyers enjoyed this product!
              <strong>(87 votes)</strong>
            </p> -->

         
              <div class="sizes">
              SIZES:
              <span class="size" data-toggle="tooltip" title="small">S</span>
              <span class="size" data-toggle="tooltip" title="medium">M</span>
              <span class="size" data-toggle="tooltip" title="xtra large"
                >XL</span
              >
            </div>
   


            <div class="action">
              <button
                class="btn1"
                type="button"
                @click="handleUpdateCart(prod)"
              >
                ADD TO CART
              </button>
              <button type="button" class="add-to-cart btn2 ">
                BUY
              </button>
              <button class="like btn btn-dark" type="button">
                <span class="fa fa-heart"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

import { mapActions } from "vuex";
export default {
  name: "DetailProduct",
  data() {
    return { id: this.$route.params.id, prod: {} };
  },

  computed: {},
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/products/${this.id}`);
      this.prod = res.data;
      console.log(res.data);
    } catch (e) {
      console.error(e);
    }
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
  },
};
</script>

<style>
.card {
  height: 600px;
  width: auto;
}
.imgs .pic img {
  height: 420px;
  width: 420px;
  margin: 4rem 0 0 0;
  border: 2px solid lightgray;
  padding: 1rem 1rem 1rem 1rem;
}
.product-title{
  margin-top: 70px;
  font-weight: bold;
  font-size: 3rem;

}
.price{
  color: red;
}
.sizes .size {
  padding: 0 10px 0 0;
  font-weight: bold;
}
.details .noted #ghichu{
  padding-top: -50px;
}
.action button{
  margin: 0 14px 0 2px;
}
.action .btn1 {
  height: 50px;
  width: 150px;
  border-radius: 7px;
  background-color: green;
  color: white;
  font-weight: bold;
}
.action .btn1:hover{
  background-color: greenyellow;
  color: black;
  font-weight: bold;
}
.action .btn2{
  height: 50px;
  width: 150px;
  border-radius: 7px;
  background-color: brown;
  color: white;
  font-weight: bold;
}
.action .btn2:hover{
  background-color: red;
  color: black;
  font-weight: bold;
}
</style>
