<template>
  <div class="damu-order-wrap">
    <table class="table damu-table">
      <tr>
        <th>Goods</th>
        <th>Number</th>
        <th>Price</th>
        <th>Total</th>
      </tr>
      <tr>
        <td>
          <img src="../../static\images\burger1.jpg" class="damu-order-img" />
        </td>
        <td>1</td>
        <td>10</td>
        <td>10</td>
      </tr>
    </table>
    <div class="row">
      <div class="col-md-3 col-xs-1"></div>
      <div class="col-md-6 col-xs-10">
        <ul class="list-group">
          <li class="list-group-item damu-order-detail">
            <span class="damu-order-infoName">Order number</span>
            <span class="damu-order-info">202008261335001</span>
          </li>
          <li class="list-group-item damu-order-detail">
            <span class="damu-order-infoName">Time of order</span>
            <span class="damu-order-info">08-26-2020 13:35</span>
          </li>
          <li class="list-group-item damu-order-detail">
            <span class="damu-order-infoName">Scheduled pick-up time</span>
            <span class="damu-order-info">08-26-2020 13:45</span>
          </li>
        </ul>
      </div>
      <div class="col-md-3 col-xs-1"></div>
    </div>
    <div class="clearfix">
      <p class="damu-order-status">
        2 items in total £
        <span>5</span>
      </p>
      <p class="damu-order-status">
        Ticket:
        <span>123456</span>
      </p>
    </div>
  </div>
</template>
<style scoped>
.damu-order-wrap{
    margin-top:20px;
} 
.damu-order-img {
    background-color: #fff;
    width: 10%;
    height: 10%;
    overflow: hidden;
    padding-left: 0;
    /* margin-top: 40px; */
}
.damu-order-tabpanel {
    border-bottom: 1px solid #eee;
}
.damu-table{background: #fff;text-align: center;}
.damu-table img{width:40px;height:40px;}
.damu-table td *{vertical-align: middle;}
.damu-table th{text-align: center;}
.damu-order-detail{
    border:none;
}
.damu-order-info{
    float:right;
}
.damu-order-status {
    float: right;
    color: red;
    margin-right:20px
}
.damu-order-status span{
    margin-right:40px
}
</style>