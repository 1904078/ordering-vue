<template>
<div>
   <!-- 轮播图 -->
   <nav-carousel></nav-carousel>
   <!-- 产品信息 -->
   <nav-product></nav-product>  
</div>

</template>
<script>
import NavCarousel from'../NavCarousel.vue'
import NavProduct from '../NavProduct.vue'
import axios from 'axios'
export default {
  data(){
    return{
      // goodsList:[]
    }
  },
  components:{
    NavCarousel,
    NavProduct
  },
};

</script>