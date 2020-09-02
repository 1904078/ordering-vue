<template>
<div id="carouselExampleIndicators" class="carousel slide damu-carousel" data-ride="carousel" data-interval="2000">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" >
    <!-- <div class="carousel-item active" >
      <img v-bind:src="'/static/images/'+item.carouselImag" class="d-block w-100">
      :class="[index == 1 ? 'active' : '']"
    </div> -->
      <div  v-for="(item,index) in carouselList" :key="index" class="carousel-item" :class="[index == 0 ? 'active' : '']">
      <img class="d-block w-100"  v-bind:src="'/static/images/'+item.carouselImage"/>
      </div>
    <!-- <div class="carousel-item active">
      <img src="../../static\images\burger2.jpg" class="d-block w-100" >
    </div>
    <div class="carousel-item">
      <img src="../../static\images\burger1.jpg" class="d-block w-100" >
    </div> -->
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon " aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      carouselList:[],
    }
  },
  components:{
  },
  mounted:function(){
        this.getCarouselList();
  },
  methods:{
    getCarouselList(){
      axios.get(".././static/goods.json").then((result)=>{
        var res=result.data;
        this.carouselList=res.carousel;
      });
    },
  }
};

</script>
<style scoped>
img{
    width: 100%;
}
.damu-carousel{
    height: 400px;
    overflow: hidden;
    margin-top: -15px;
}
@media only screen and (max-width: 768px) {
.damu-carousel{
    height: 200px; 
}
}
</style>