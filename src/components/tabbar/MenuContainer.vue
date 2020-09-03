<template>
<div>
   <!-- 轮播图 -->
   <nav-carousel></nav-carousel>
   <!-- 产品信息 -->
   <nav-product></nav-product> 
   <!-- <nav-footer></nav-footer>  -->
</div>

</template>
<script>
import NavCarousel from'../NavCarousel.vue'
import NavProduct from '../NavProduct.vue'
// import NavFooter from'@/components/NavFooter.vue'
import axios from 'axios'
export default {
  data(){
    return{
      // goodsList:[]
    }
  },
  components:{
    NavCarousel,
    NavProduct,
    // NavFooter
  },
};

</script>