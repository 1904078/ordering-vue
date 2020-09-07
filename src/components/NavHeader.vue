<template>
  <div>
     <nav class="navbar navbar-expand-lg navbar-light bg-light damu-navbar-top">
      <a class="navbar-brand damu-navbar-brand" href="#"><h2>Easy to order</h2></a>
      <button
        class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <!-- <div class="navbar-nav">
           <router-link class="nav-item nav-link" to="/">
            Home
            </router-link>
          <router-link class="nav-item nav-link" to="#">Login</router-link>
          <router-link class="nav-item nav-link" to="#">Register</router-link>
        </div> -->
        <ul class=" navbar-nav mr-auto">
          <li class="nav-item active"> 
            <router-link class=" nav-link" to="/">
            Home
            <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li> 
          <li class="nav-item ">
             <router-link class="nav-link" to="/register">Register</router-link>
          </li> 
        </ul>
      </div>
    </nav>
</div>
</template>

<script>
export default {
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.damu-navbar-top {
  background-color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.075);
}
.navbar-light .damu-navbar-brand {
  color: #ffe6aa;
  /* font-size: 2.5rem; */
  text-shadow: 0.5px 0.5px #9cacb4;
}
@media only screen and (min-width: 992px) {
  .navbar-light .damu-navbar-brand {
    padding: 0.5rem 7rem;
  }
}
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.active {
  color: #f8c13f;
}

.navbar-light .navbar-nav .nav-link:focus,
.navbar-light .navbar-nav .nav-link:hover {
  color: #f1aa02;
}
.navbar-toggler:hover,
.navbar-toggler:focus {
  background-color: #ffe6aa;
} 
</style>
