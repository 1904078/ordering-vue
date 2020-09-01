<template>
  <div>
    <nav-bread>
      <span>Shopping car</span>
    </nav-bread>
    <div class="container damu-cart-wrap">
      <div class="row">
        <div class="col-lg-2 col-md-2"></div>
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
                <span class="btn-group ">
                  <button type="button" class="btn btn-light">+</button>
                  <button type="button" class="btn btn-light">1</button>
                  <button type="button" class="btn btn-light">-</button>
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
    <div class="container panel panel-default damu-bottom-wrap">
      <div class="row panel-body bottom-menu-include">
        <div class="col-md-2 col-xs-2 check-all-bottom bottom-menu">
          <label class="damu-checkbox">
            <input type="checkbox" id="checked-all-bottom" />
            <span id="checkAllBottom">All</span>
          </label>
        </div>
        <div class="col-md-2 col-xs-2 bottom-menu">
            <span>Total:<span id="selectGoodsMoney">0.00</span></span>
        </div>
         <div class="col-md-4 col-xs-4 bottom-menu">
        </div>
         <div class="col-md-2 col-xs-2 bottom-menu">
            <button class="btn"><span id="deleteMulty">Delete</span></button>         
        </div>
         <div class="col-md-2 col-xs-2 bottom-menu">
            <button class="btn"><span id="payMulty"><a href="#">Pay</a></span></button> 
        </div>
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
a{
    color:rgb(194, 182, 24);
}
.damu-cart-img {
  background-color: #fff;
  width: 10%;
  height: 10%;
  overflow: hidden;
  padding-left: 0;
  /* margin-top: 40px; */
}

.damu-table {
  background: #fff;
  text-align: center;
}
.damu-table img {
  width: 40px;
  height: 40px;
}
.damu-table td * {
  vertical-align: middle;
}
.damu-table th {
  text-align: center;
}
.damu-cart-checkbox {
  background-color: #fff;
  border: none;
  margin-top:10px
}
@media only screen and (max-width: 768px) {
  .damu-product-intro {
    margin-left: -15px;
  }
}
.damu-bottom-wrap{
    bottom: 38px;
    margin-bottom: 20px;
    border-width: 1px 0 0;
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1030;
}
.bottom-menu {
    display: flex;
    align-items: center;
    justify-content: center;
}
.bottom-menu #checkAllBottom {
    vertical-align: text-bottom;
}
#selectGoodsMoney {
    color: rgb(194, 182, 24);
    font-size: 16px;
    font-weight: bolder;
}
#deleteMulty, #payMulty{
    color: rgb(194, 182, 24);
    cursor: pointer;
    vertical-align: text-bottom;
}
.bottom-menu-include {
    background: #e5e5e5;
}
.damu-checkbox{
  margin-bottom: 0;
}
</style>