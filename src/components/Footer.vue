<template>
  <!-- Site footer -->

  
  <footer class="site-footer">
    <div class="container">

        <div class="share">
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin"></a>
          <a href="" class="fa-brands fa-facebook"></a>
        </div>
  <hr>
        <div class="links">
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">PRODUCTS</a>
          <a href="#">REVIEW</a>
          <a href="#">CONTACT</a>
          <a href="#">BLOGS</a>
        </div>

        <div class="credit">
          created by <span>mr. web designer</span> | all rights reserved
        </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};

</script>

<style scope>
.site-footer {
  background-color: #13131a;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
}
.site-footer .links a {
    margin: 0 1rem 0 1rem;
    font-size: 1.3rem;
    text-decoration: none;
    color: white;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    border: 0.1px solid white;
    border-radius: 3px;
}
.site-footer .links a:hover{
    color: black;
    background-color: white;
}
.credit{
    margin-top: 2rem;
    margin-bottom: 1rem;
}


.site-footer .share a{
  margin: 0.5rem 1rem 1rem 1rem;
  font-size: 1.7rem;
  border: 1px solid white;
  padding: 15px;
  border-radius: 8px;
  text-decoration: none;
  color: white;
}
.site-footer .share a:hover{
  background-color: white;
  color: black;
}
.site-footer hr{
  background-color: white;
  margin-bottom: 3rem;
  width: 60%;
}
</style>
