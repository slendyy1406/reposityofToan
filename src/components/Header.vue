<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="container item-header">
        <div
          class="navbarr collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <a class="navbar-brand" style="margin: 0 240px 0 -280px" href="#">
            <img src="@/assets/anh.jpg" alt="Logo" style="width: 50px" />
          </a>

          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link text-white" to="/"
                >Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/product"
                >Products
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/About"
                >About
              </router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link class="nav-link text-white" to="/review"
                >Review
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/contact"
                >Contact
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/blogs"
                >Blogs
              </router-link>
            </li> -->
          </ul>
          <div class="contain2">
            <div class="cart">
              <router-link to="/shopping-cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-cart3"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                  />
                </svg>
                <span> {{ cart?.length }}</span>
              </router-link>
            </div>

            <button
              @click="openLogin(true)"
              v-if="user == null"
              class="loginbtn btn btn-outline-danger"
            >
              Login
            </button>
          </div>
          <div v-if="user" @click="userToggle(true)" class="userIcon">
            <img :src="user?.photoUrl" alt="" />
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div class="loginform" v-if="isOpen">
    <div class="boxlogin">
      <div class="topside">
        <h1>LOGIN WITH YOUR SOCIALMEDIA ACCOUNT</h1>
      </div>
      <div class="bodyside">
        <button @click="loginWithGG" class="btn btn-outline-danger">
          GOOGLE
        </button>
        <button class="btn btn-outline-primary">FACEBOOK</button>
      </div>
    </div>
    <div @click="openLogin(false)" class="layout"></div>
  </div>
  <div class="usercontain" v-if="isUser">
    <div class="userBox">
      <div class="userTop">
        <div class="userTitle">
          <h3>{{ user?.name }}</h3>
          <h3>{{ user?.email }}</h3>
        </div>
      </div>
      <div class="userBody">
        <button @click="signOut()" class="btn btn-outline-dark">Logout</button>
      </div>
    </div>
    <div @click="userToggle(false)" class="userLayout"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

export default {
  name: "Header",
  data() {
    return {
      isOpen: false,
      isUser: false,
      search: ''
    };
  },
  computed: {
    ...mapGetters(["cart", "user"]),
  },
  methods: {
    ...mapActions(["changesFilterValue"]),
    onChangeMethod(event) {
      console.log(event.target.value);
      this.changesFilterValue(event.target.value);
    },
    openLogin(isOpen) {
      this.isOpen = isOpen;
    },
    userToggle(isUser) {
      this.isUser = isUser;
    },
    loginWithGG() {
      signInWithPopup(auth, new GoogleAuthProvider());
    },
    signOut() {
      auth.signOut();
    },
  },
};
</script>

<style scope>
.header {
  background-color: #13131a;
}

.item-header {
  padding: 10px 0px;
}
.nav-item {
  font-weight: bold;
  margin: 0 15px 0 15px;
}
.nav-item:hover {
  background-color: lightslategrey;
  border-radius: 7px;
}
.cart svg {
  color: white;
  margin-left: 50px;
}

.cart span {
  color: white;
  margin-bottom: 10px;
}
.contain2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 450px;
}
.loginbtn {
  width: 220px;
  height: 40px;
}
.boxlogin {
  background: #fff;
  left: 50%;
  top: 25%;
  width: 520px;
  /* height: 45vh; */
  z-index: 20;
  border-radius: 10px;
  position: fixed;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  padding: 30px 60px;
}
.bodyside {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 60px;
}
.bodyside button {
  padding: 20px 60px;
  margin: 20px 0;
}
.layout {
  z-index: 15;
  background-color: rgba(128, 128, 128, 0.329);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
}
.userIcon img {
  width: 40px;
  height: 40px;
  background-color: whitesmoke;
  border-radius: 30px;
  border: 2px solid white;
}
.usercontain {
  position: relative;
}
.userBox {
  position: absolute;
  top: -100%;
  z-index: 50;
  right: 5%;
  width: 400px;
  background-color: #fff;
  border-radius: 20px;
  padding: 10px 0;
}
.searchform {
  display: flex;
  flex-direction: row;
}
.userTop {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
}
.userTop img {
  width: 60px;
}
.userLayout {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.591);
  z-index: 45;
}
</style>
