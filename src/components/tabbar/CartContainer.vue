<template>
  <div>
    <nav-bread>
      <span>Shopping car</span>
    </nav-bread>
    <div class="container damu-cart-wrap">
      <div class="row">
          <div class="col-lg-2 col-md-2 "></div>
          <div class="col-lg-10 col-md-10 col-sm-12 col-12">
        <table class="table damu-table">
          <tr>
            <th></th>
            <th>Goods</th>
            <th>Number</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <div class="input-group damu-cart-checkbox">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input type="radio" aria-label="Radio button for following text input" />
                  </div>
                </div>
              </div>
            </td>
            <td>
              <img src="../../../static/images/burger2.jpg" class="damu-cart-img" />
            </td>
            <td>
              <span class="btn-group btn-group-sm">
                <button type="button" class="btn btn-default">+</button>
                <button type="button" class="btn btn-default">1</button>
                <button type="button" class="btn btn-default">-</button>
              </span>
            </td>
            <td>10</td>
            <td>10</td>
          </tr>
        </table>
          </div>
          <div class="col-lg-2 col-md-2"></div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBread from "../NavBread.vue";
import axios from "axios";
export default {
  data() {
    return {};
  },
  components: {
    NavBread,
  },
};
</script>
<style scoped>
.damu-cart-img {
    background-color: #fff;
    width: 10%;
    height: 10%;
    overflow: hidden;
    padding-left: 0;
    /* margin-top: 40px; */
}
.damu-table{background: #fff;text-align: center;}
.damu-table img{width:40px;height:40px;}
.damu-table td *{vertical-align: middle;}
.damu-table th{text-align: center;}
.damu-cart-checkbox{
    background-color: #fff;
    border: none;
}
@media only screen and (max-width: 768px) {
.damu-product-intro{
 margin-left:-15px;
}
}
</style>