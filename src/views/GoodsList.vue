<template>
  <div>
    <!-- nav-header -->
    <nav-header></nav-header>
    <!-- router -->
   <nav-bread>
     <span>Menu</span>
   </nav-bread>
   <nav-carousel></nav-carousel>
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
export default {
  components:{
    NavHeader,
    NavFooter,
    NavBread,
    NavCarousel,
    NavTab
  }
};
</script>

<style scoped>

</style>
