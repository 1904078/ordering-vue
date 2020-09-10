<template>
<div>
  <div class="damu-navtab">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <a
          class="nav-link active"
          id="menu-tab"
          data-toggle="tab"
          href="#menu"
          role="tab"
          aria-controls="menu"
          aria-selected="true"
        >Menu</a>
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link"
          id="comments-tab"
          data-toggle="tab"
          href="#comments"
          role="tab"
          aria-controls="comments"
          aria-selected="false"
        >Comments</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="menu" role="tabpanel" aria-labelledby="menu-tab">
        <div class="container-fluid" align="center">
          <div class="row">
            <div class="col-lg-2 col-md-2 col-sm-3 col-3">
              <ul class="list-group" id="Menu" >
                  <li>
                    <a href="javascript:void(0)"  class="list-group-item" v-bind:class="{'active':menuChecked=='all'}"
                    @click="menuChecked='all'">All</a>
                 </li> 
                <li v-for="(item,index) in menuList" :key="index">
                    <a href="javascript:void(0)" class="list-group-item menuName"  v-bind:class="{'active':menuChecked==index}" 
                    @click="menuChecked=index">{{item.menuName}}</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-10 col-md-10 col-sm-9 col-9">
                  <ul class="container damu-product">
                    <li class="row" v-for="(item,index) in ProductsList" :key="index">
                      <div class="col-4 col-sm-4 col-md-4 col-lg-4">
                        <a href="#">
                          <img class="damu-product-img" v-bind:src="'/static/images/'+item.productImage"/>
                        </a>
                      </div>
                      <div class="col-8 col-sm-8 col-md-8 col-lg-4">
                        <div class="damu-product-intro">
                          <a href="#">
                            <h4 class="product-name">{{item.productName}}</h4>
                            <span class="product-intro">{{item.productIntro}}</span>
                          </a>
                        </div>
                        <div class="damu-price-cart">
                          <span class="damu-price">£{{item.salePrice}}</span>
                          <a href="javascript:;" class="damu-cart" @click="addCart(item.productId)">
                            <span class="fa fa-cart-plus"></span>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                <!-- </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="comments" role="tabpanel" aria-labelledby="comments-tab">
        <table class="table">
          <tr class="success damu-comments-header">
            <td>
              <img style="width:20px" src="../../static\images/photo.jpg" />
            </td>
            <td>
              User name:
              <span>Ailsa</span>
            </td>
          </tr>
          <tr>
            <td colspan="2" >
              <p>It is very delicious.It is very delicious.It is very delicious</p>
            </td>
          </tr>
        </table>
        <!---写评论------>
        <form role="form">
          <div class="form-group ">
            <!-- <label for="name">comments</label> -->
            <input type="text" class="form-control" placeholder="Write your comment...." />
            <!-- <div class="justify-content-center"> -->
              <input type="submit" class="btn btn-info clearfix" value="Submit">
  
          </div>
        </form>
      </div>
    </div>
  
  </div>
  <!-- 未登录 -->
  <modal v-bind:mdShow="mdShow" v-on:close="closeModal">
    <span slot="message">
      Please Login first
    </span>
    <span slot="btnGroup">Close</span>
  </modal>
  <!-- 加入成功 -->
   <modal v-bind:mdShow="mdShowCart" v-on:close="closeModal">
    <span slot="message">
     Success
    </span>
    <div slot="btnGroup" >
      <a class="btn" href="javascript:;" @click="mdShowCart=false">Continue Shopping</a> 
      <router-link class="btn" href="javascript:;" to="/cart">View shopping cart</router-link>
    </div>
  </modal>
</div> 
</template>
<script>
import axios from 'axios'
import Modal from'@/components/Modal.vue'
export default {
  data(){
    return{
      ProductsList:[],
       menuList:[
        {"menuId":"1",
          "menuName":"Single item"
        },
        {"menuId":"2",
            "menuName":"Meal"
        },
        {"menuId":"3",
         "menuName":"Snack"
        },
        { "menuId":"4",
          "menuName":"Drinks"
        }
    ],
     menuChecked:'all',
     mdShow:false,
     mdShowCart:false
    }
  },
  components:{
    Modal
  },
  mounted:function(){
        this.getProductsList();
  },
  methods:{
    getProductsList(){
         axios.get("/product/list").then((result)=>{
        var res=result.data;
        this.ProductsList=res.result.list;
      });
    },
    addCart(productId){
      axios.post("/product/addCart",{
        productId:productId
      }).then((res)=>{
        console.log(res.data.status)
        if(res.data.status==0){
          // alert('加入成功');
          this.mdShowCart=true;

        }else{
          // alert("msg:"+res.data.msg)
          this.mdShow=true;
        }
      });
    },
    closeModal(){
        this.mdShow=false;
         this.mdShowCart=false;
    }
  }
};

</script>
<style  scoped>
ul li{
    list-style:none;
}
a {
  color: #b89f6c;
  text-decoration: none;
}
.damu-navtab {
  margin-bottom: 55px;
}
.row{
    margin-bottom: 10px;
}
.menuName{
  background-color: #f1f0e8;
  border-color: #e2e1dd;
}
 #menu .active,
 .menuName:focus,
 .menuName:hover {
  color: #fff;
  background-color: #e2bf22;
  border-color: #d1b01d;
}
.damu-product {
  margin-top: 20px;
  margin-bottom: 20px;
}
.damu-product-img{
  background-color: #fff;
  width: 100%;
  /* height:100%; */
  overflow: hidden;
  padding-left: 0;
  margin-top: 20px;
}
.damu-product-details {
  margin-top: 10px;
}
.damu-price-cart{
    width:100%;
    height:50px
}
.damu-product-intro{
  padding-bottom: 1rem;
  margin-top: 10px;
}
@media only screen and (min-width: 992px) {
.damu-product-intro{
  margin-top: 50px;
}
}
.damu-price,
.damu-cart {
  display: block;
  float: left;
  margin-left: 4rem;
}
@media only screen and (max-width: 768px) {
  .damu-price,
  .damu-cart {
    margin-left: 2rem;
}
}
.fa {
  top: 4px;
}
#Menu {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
}
#comments{
  padding:30px;
}
.damu-comments-header{
  background-color: rgb(158, 154, 154);
}
 .btn-info {
    /* float:right; */
    display: block;
    background-color: #ffc107;
    border-color: #cc9a05;
    margin:10px auto;

}
.btn a{
  color:#fff;
}

</style>
