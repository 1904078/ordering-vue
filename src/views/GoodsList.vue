<template>
  <div>
<!-- nav-header -->
    <nav-header></nav-header>
<!-- router -->
   <nav-bread>
     <span>Menu</span>
   </nav-bread>
   <!-- 轮播图 -->
   <nav-carousel></nav-carousel>
   <!-- 产品信息 -->
   <nav-tab></nav-tab>
<!-- nav-footer -->
   <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from'@/components/NavHeader.vue'
import NavFooter from'@/components/NavFooter.vue'
import NavBread from'@/components/NavBread.vue'
import NavCarousel from'@/components/NavCarousel.vue'
import NavTab from '@/components/navTab.vue'
import axios from 'axios'
export default {
  data(){
    return{
      // goodsList:[]
    }
  },
  components:{
    NavHeader,
    NavFooter,
    NavBread,
    NavCarousel,
    NavTab
  },
  // mounted:function(){
  //       this.getGoodsList();
  // },
  // methods:{
  //   getGoodsList(){
  //     axios.get(".././static/goods.json").then((result)=>{
  //       var res=result.data;
  //       console.log(res.result);
  //       this.goodsList=res.result;
  //     });
  //   }
  // }
};

</script>

<style scoped>

</style>
