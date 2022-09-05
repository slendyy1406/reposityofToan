<template>
    <section class="about" id="about">

    <div class="content">
        <h3>ABOUT US</h3>
        <p>HOW IS YOUR DAY? MAKE YOUR DAY GREAT W/ OUR COFFE</p>
    </div>

</section>
</template>

<script>
export default {
    name: 'About',
    computed: {
    },
    methods: {
        
    },
}
</script>

<style>
.about {

  min-height: 70vh;
  display: flex;
  align-items: center;
  background: url('~@/assets/images/about-img.jpeg') no-repeat;
  background-size: cover;
  background-position: center;
}

.about .content {
  max-width: 60rem;
}

.about .content h3 {
  font-size: 6rem;
  text-transform: uppercase;
  color: #fff;
}

.about .content p {
  font-size: 2rem;
  font-weight: lighter;
  line-height: 1.8;
  padding: 1rem 0;
  color: #eee;
}
.about {
    background-position: left;
    justify-content: center;
    text-align: center;
  }

  .about .content h3 {
    font-size: 4.5rem;
  }

  .about .content p {
    font-size: 1.5rem;
  }
</style>
