<template>
    <section class="home" id="home">

      <div class="content">
        <a href="/Product" class="buttton">GET YOUR NOW</a>
      
      </div>

    </section>
</template>

<script>

export default {
    name: 'HomePage',
    computed: {

    },
    methods: {

    },
}
</script>

<style>
.home {

  min-height: 100vh;
  display: flex;
  align-items: center;
  background: url('~@/assets/images/home-img.jpeg') no-repeat;
  background-size: cover;
  background-position: center;
}

.home .content {
  max-width: 60rem;
}

.home {
    background-position: left;
    justify-content: center;
    text-align: center;
  }

  .content .buttton {
    font-size: 1.5rem;
    display: inline-block;
    background-color: transparent;
    color: white;
    padding: 15px 30px;
    border: none;
    outline: none;
    position: relative;
    text-decoration: none;
    z-index: 0;
  }
  .buttton:before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 8px;
    background-color: #ffc107;
    z-index: -1;
    transition: width 0.5s ease-in-out;
  }
  .buttton:hover:before{
    width: 100%;
  }
</style>
