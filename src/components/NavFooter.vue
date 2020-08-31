<template>
     <nav class="navbar fixed-bottom navbar-dark bg-dark">
      <div class="container" align="center">
        <!-- <ul class="nav nav-tabs nav-tabs-justified"> -->
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-3 col-3 damu-bottomNav" align="center">
            <router-link to="/menu">
              <span>Menu</span>
              <span class="fa fa-list " aria-hidden="true"></span>
            </router-link>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-3 col-3 damu-bottomNav" align="center">
            <router-link to="/order">
              <span>Order</span>
              <!-- <span class="glyphicon glyphicon-book"></span> -->
              <span class="fa fa-book " aria-hidden="true"></span>
            </router-link>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-3 col-3 damu-bottomNav" align="center">
            <router-link to="/cart">
              <span>Cart</span>
              <span class="fa fa-shopping-cart">
              </span>
            </router-link>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-3 col-3 damu-bottomNav" align="center">
            <router-link to="/my">
                <span>My</span>
                <span class="fa fa-user" aria-hidden="true"></span>
            </router-link>
          </div>
        </div>
        <!-- </ul> -->
      </div>
    </nav>

</template>

<script>
export default {
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
     /* margin-left: 0; */
       width: 100%;
}
.damu-bottomNav {
  margin-top: 10px;
}
a {
    display: block;
    height: 30px;
    line-height: 30px;
    width: 100%;
    text-align: center;
    color: #ffe6aa;
    text-decoration: none;
    background-color: transparent;
}
@media only screen and (max-width: 540px) {
.col-3{
    padding-right:0;
}
}
</style>
