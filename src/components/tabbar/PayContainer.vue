<template>
  <div>
    <nav-bread>
      <span>Pay</span>
    </nav-bread>
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-3 col-xs-1"></div>
        <div class="col-md-6 col-sm-6 col-xs-10 clearfix">
          <ul class="nav nav-tabs" role="tablist" id="myTab">
            <li role="presentation" class="nav-item">
              <a
                class="nav-link active"
                id="now-tab"
                data-toggle="tab"
                href="#now"
                role="tab"
                aria-controls="now"
                aria-selected="true"
              >Now</a>
            </li>
             <li role="presentation" class="nav-item">
              <a
                class="nav-link"
                id="reserve-tab"
                data-toggle="tab"
                href="#reserve"
                role="tab"
                aria-controls="reserve"
                aria-selected="true"
              >Reserve</a>
            </li>
          </ul>
          <!-- common -->
          <ul class="list-group">
            <li class="list-group-item">
              <span class="damu-pay-infoName">Reserved user</span>
              <span class="damu-pay-info">Ailsa</span>
            </li>
            <li class="list-group-item">
              <span class="damu-pay-infoName">Reserved Phone</span>
              <span class="damu-pay-info">07529936177</span>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div role="tabpanel" class="tab-pane active" id="now" aria-labelledby="now-tab">
              <ul class="list-group conatiner">
                <li class="list-group-item row">
                  <span class="damu-pay-infoName">Pick-up time</span>
                  <!-- <input id="startTime"  autocomplete="off" v-model="PickupTime"/> -->
                </li>
              </ul>
            </div>
            <div role="tabpanel" class="tab-pane" id="reserve" aria-labelledby="reserve-tab">
              <ul class="list-group">
                <li class="list-group-item">
                  <span class="damu-pay-infoName">Pick-up time</span>
                  <span class="damu-pay-info">13:45<button class="damu-pay-btn">></button>
                  </span>
                </li>
                  <li class="list-group-item">
                  <span class="damu-pay-info">To 05-09-2020<button class="damu-pay-btn">></button>
                  </span>
                  <span class="damu-pay-info"> From 01-09-2020<button class="damu-pay-btn">></button>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <span>How to take meals?</span>
         <ul class="nav nav-tabs" role="tablist" id="myTab">
            <li role="presentation" class="nav-item">
              <a
                class="nav-link active"
                id="eatin-tab"
                data-toggle="tab"
                href="#eatin"
                role="tab"
                aria-controls="eatin"
                aria-selected="true"
              >Eat in</a>
            </li>
             <li role="presentation" class="nav-item">
              <a
                class="nav-link"
                id="takeout-tab"
                data-toggle="tab"
                href="#takeout"
                role="tab"
                aria-controls="takeout"
                aria-selected="true"
              >Take out</a>
            </li>
          </ul>
          <div class="tab-content">
            <!-- <div role="tabpanel" class="tab-pane active" id="eatin"> -->
            <div class="tab-pane fade show active" id="eatin" role="tabpanel" aria-labelledby="eatin-tab">
              <ul class="list-group">
                <li class="list-group-item">
                  <span class="damu-pay-infoName">Have you arrived?</span>
                </li>
                <li class="list-group-item">
                  <span class="damu-pay-infoName">Table number</span>
                  <span class="damu-pay-info">
                    13
                    <button class="damu-pay-btn">></button>
                  </span>
                </li>
              </ul>
            </div>
            <div role="tabpanel" class="tab-pane fade show " id="takeout"  aria-labelledby="takeout-tab">
              <ul class="list-group">
                <li class="list-group-item">
                  <span class="damu-pay-infoName">Package fee:</span>
                  <span class="damu-pay-info">10p</span>
                </li>
              </ul>
            </div>
          </div>
          <ul class="list-group" style="margin-bottom: 60px;">
            <li class="list-group-item">
              <span class="damu-pay-infoName">Payment method</span>
              <span class="damu-pay-info">
                card
                <button class="damu-pay-btn">></button>
              </span>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-3 col-xs-1"></div>
      </div>
    </div>
    <div class="panel panel-default damu-bottom-wrap container">
        <div class="panel-body bottom-menu-include row">
            <div class="col-md-3 col-sm-3 col-3 check-all-bottom bottom-menu"></div>
            <div class="col-md-3 col-sm-3 col-3 bottom-menu">
                <span>Total:<span id="selectGoodsMoney">0.00</span></span>
            </div>
            <div class="col-md-3 col-sm-3 col-3 bottom-menu">
                <button class="btn"><span id="payMulty"><a href="#">Pay</a></span></button>  
            </div>
            <div class="col-md-3 col-sm-3 col-3 bottom-menu"></div>
        </div>
    </div>
  </div>
</template>
<script>
import NavBread from "../NavBread.vue";
import axios from 'axios'
// import $ from 'jquery'
import 'vue-bootstrap-datetimepicker'
// import datePicker from 'vue-bootstrap-datetimepicker'
// import '@fortawesome/fontawesome-free/css/all.css'
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css'
export default {
  components: {
    NavBread,
  },
 
};
</script>
<style scoped>
a {
    color: #b89f6c;
}
.damu-pay-btn {
  background-color: #fff;
  border: none;
}
.damu-pay-info {
    float: right;
}
.list-group-item {
    margin-bottom: 10px;
    border: none;
}
.damu-bottom-wrap{
    bottom: 30px;
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

</style>