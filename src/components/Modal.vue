<template>
   <div class="modal" tabindex="-1" role="dialog" v-bind:class="{'md-show':mdShow}">
  <div class="modal-dialog">
    <div class="modal-content">
       <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Tips</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <!-- <p>Modal body text goes here.</p> -->
        <slot name="message"></slot>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeModal">
        <!-- Close -->
         <slot name="btnGroup"></slot>
        </button>
      </div>
    </div>
  </div>
</div>
</template>
<style scoped>
.md-show{
  display: block;
}
</style>>

</style>
<script>
    export default{
        props:["mdShow"],
        data(){
            return{
                msg:'hello vue'
            }
        },
        methods:{
          closeModal(){
            this.$emit("close");
          }
        }
    }
</script>
