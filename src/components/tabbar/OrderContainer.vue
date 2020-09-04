<template>
  <div>
    <nav-bread>
      <span>My order</span>
    </nav-bread>
    <div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
             <li class="nav-item" role="presentation">
                <a class="nav-link active" id="unfinished-tab" data-toggle="tab" href="#unfinished" role="tab" aria-controls="unfinished" aria-selected="true">
                 Unfinished
                </a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="false">
                All
                </a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="cancelled-tab" data-toggle="tab" href="#cancelled" role="tab" aria-controls="cancelled" aria-selected="false">
                Cancelled
                </a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="unfinished" role="tabpanel" aria-labelledby="unfinished-tab">
                 <span class="damu-order-status">Making</span>
                 <order-info></order-info>
            </div>
            <div class="tab-pane fade" id="all" role="tabpanel" aria-labelledby="all-tab">
                     <span class="damu-order-status">Taking</span>
                 <order-info></order-info>
            </div>
            <div class="tab-pane fade" id="cancelled" role="tabpanel" aria-labelledby="cancelled-tab">
                   <span class="damu-order-status">Cancelled</span>
                  <order-info></order-info>
            </div>
        </div>
    </div>
    <!-- <nav-footer></nav-footer> -->
  </div>
</template>
<script>
import NavBread from '../NavBread.vue'
import OrderInfo from '../OrderInfo.vue'
// import NavFooter from'@/components/NavFooter.vue'
import axios from 'axios'
export default {
  data() {
    return {};
  },
  components: {
    NavBread,
    OrderInfo,
  },
};
</script>
<style scoped>
a{
    color:rgb(194, 182, 24);
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