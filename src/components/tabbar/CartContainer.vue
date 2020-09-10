<template>
  <div>
    <nav-bread>
      <span>Shopping car</span>
    </nav-bread>
    <div v-for="(item,index) in cartList" :key="index">
    <div class="container damu-cart-wrap">
      <div class="row">
       <table class="table damu-table">
            <tr>
              <th></th>
              <th>Goods</th>
              <th>Number</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
            <tr >
              <td>
                <form action="" method="get"  @click="editCart('checked',item)"> 
                  <label>
                    <input name="Fruit" type="radio" value="" v-bind:checked="item.checked=='1'?true:false"/>
                  </label> 
                </form> 
              </td>
              <td>
                <img v-bind:src="'/static/images/'+item.productImage"
                class="damu-cart-img" />
              </td>
              <td>
                <span class="btn-group ">
                  <button type="button" class="btn btn-light" @click="editCart('add',item)">+</button>
                  <button type="button" class="btn btn-light" >{{item.productNumber}}</button>
                  <button type="button" class="btn btn-light" @click="editCart('minus',item)">-</button>
                </span>
              </td>
              <td style="padding-top:20px">{{item.salePrice}}</td>
              <td style="padding-top:20px">{{item.productNumber*item.salePrice}}</td>
            </tr>
       </table>
      </div>
    </div>
    <div class="container panel panel-default damu-bottom-wrap">
      <div class="row panel-body bottom-menu-include">
        <div class="col-md-3 col-xs-3 col-3 check-all-bottom bottom-menu">
          <label class="damu-checkbox" @click="toggleCheckAll">
            <input type="checkbox" id="checked-all-bottom" v-bind:checked="checkAllFlag"/>
            <span id="checkAllBottom">All</span>
          </label>
        </div>
        <div class="col-md-3 col-xs-3 col-3 bottom-menu">
            <span>Total:<span id="selectGoodsMoney">{{totalPrice}}</span></span>
        </div>
         <div class="col-md-3 col-xs-3 col-3 bottom-menu">
            <button class="btn">
              <span id="deleteMulty" @click="delCartConfirm">Delete</span>
              </button>         
        </div>
         <div class="col-md-3 col-xs-3 col-3 bottom-menu">
            <button class="btn">
              <span id="payMulty">
                <router-link to="/pay">Pay</router-link>
                </span>
            </button> 
        </div>
      </div>
    </div>
     <!-- <nav-footer></nav-footer> -->
     </div>
     <modal :mdShow="modalConfirm" v-on:close="closeModal">
       <p slot="message">Confirm to delete?</p>
      <div slot="btnGroup" >
        <a class="btn" href="javascript:;" @click="delCart">Confirm</a> 
        <a class="btn" href="javascript:;" @click="modalConfirm=false">Close</a> 
     </div>
     </modal>
  </div>
</template>
<script>
import NavBread from '../NavBread.vue'
import Modal from'@/components/Modal.vue'
// import NavFooter from'@/components/NavFooter.vue'
import axios from 'axios'
export default {
  data(){
    return{
      cartList:[],
      productId:'',
      modalConfirm:false,
      productIdList:[],
      // checkAllFlag:false,
    }
  },
  components:{
   NavBread,
   Modal
  //  NavFooter
  },
  mounted(){
    this.init();
  },
  computed:{
     checkAllFlag(){
      return this.checkedCount==this.cartList.length;
     },
     checkedCount(){
       var i=0;
       this.cartList.forEach((item)=>{
         if(item.checked=='1'){
           i++;
         }
       })
       return i;
     },
     totalPrice(){
            var money = 0;
            this.cartList.forEach((item)=>{
              if(item.checked=='1'){
                money += parseFloat(item.salePrice)*parseInt(item.productNumber);
              }
            })
            return money;
          }
  },
  methods:{
    init(){
      axios.get("/users/cartList").then((response)=>{
        let res=response.data;
        this.cartList=res.result;
      })
    },
     closeModal(){
        this.modalConfirm=false;
    },
    delCartConfirm(){
       this.modalConfirm=true;
      this.cartList.forEach((item)=>{
          if(item.checked=='1'){
         this.productIdList.push({'productId':item.productId})
        } 
      });
    },
    delCart(){ 
       this.productIdList.forEach((item)=>{
        axios.post("users/cartDel",{
        productId:item.productId})
        .then((response)=>{
          let res=response.data;
          if(res.status=='0'){
            this.modalConfirm=false;
            this.init();
          }
        });
       })
  
    },
    editCart(flag,item){
       if(flag=='add'){
         item.productNumber++;
       }else if(flag=="minus"){
         if(item.productNumber<=1){
           return;
         }
           item.productNumber--;
       }else{
         item.checked=item.checked=="1"?'0':'1';
       }
       axios.post("/users/cartEdit",{
         productId:item.productId,
         productNumber:item.productNumber,
         checked:item.checked,
       }).then((response)=>{
           let res=response.data;
       })
    },
    toggleCheckAll(){
      var flag=!this.checkAllFlag;
      this.cartList.forEach((item)=>{
        item.checked=flag?'1':'0';
      })
      axios.post("/users/editCheckAll",{
        checkAll:flag
      }).then((response)=>{
        let res=response.data;
      })
    }
    
  }
};
</script>
<style scoped>
a{
    color:rgb(194, 182, 24);
}
.table td {
    padding: 0.5rem;
}
.btn a[data-v-701ac82d] {
    background-color: rgba(233, 187, 37, 0.25);
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
</style>