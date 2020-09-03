<template>
  <div>
<!-- nav-header -->
    <nav-header></nav-header>
<!-- router -->
  <router-view></router-view>
   
<!-- nav-footer -->
   <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from'@/components/NavHeader.vue'
import NavFooter from'@/components/NavFooter.vue'
import axios from 'axios'
export default {
  data(){
    return{
    }
  },
  components:{
    NavHeader,
    NavFooter,
  },
};

</script>

