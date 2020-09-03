<template>
<div>
   <nav-header></nav-header>
 <div class="damu-login-form-wrapper">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4 col-1">
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-10">
            <div class="damu-form-column-wrap">
              <h2>Login</h2>
                <div class="error-wrap">
                  <span class="error error-show" v-show="errorTip">The user name or password is wrong</span>
                </div>
              <form>
                <div class="form-group">
                  <!-- <span class="damu-span-input-label-wrap"> -->
                    <label class="damu_input_label">
                      <i class="fa fa-user"></i>
                    </label>
                    <input class="damu_input_field" type="text" placeholder="User name" v-model="userName">
                  <!-- </span> -->
                </div>
                <div class="form-group">
                  <!-- <span class="damu-span-input-label-wrap"> -->
                    <label class="damu_input_label">
                      <i class="fa fa-lock"></i>
                    </label>
                    <input class="damu_input_field" type="password" placeholder="Password" v-model="password">
                  <!-- </span> -->
                </div>
                <div class="damu-button-wrap">
                  <a href="/" @click="login">
                    <button  class="btn  btn-default damu-form-button" type="button">
                    Login
                    </button>
                 </a>
                </div>
                <div class="form-group">
                  <label class=" label-content-color custom-form-label2" > 
                    <a href="#">Register</a>
                  </label>
                  <label class=" label-content-color custom-form-label2" > 
                    <a href="#">Forgot password?</a>
                  </label> 
                </div>
              </form>
            </div>  
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-1">
          </div>
        </div>
      </div>

</div>
</template>
<script>
import '../assets/css/style.css'
import NavHeader from'@/components/NavHeader.vue'
import axios from 'axios'
export default {
  data(){
    return{
      userName:'',
      password:'',
      errorTip:false,
    }
  },
  components:{
    NavHeader,
  },
  methods:{
    login(){
      
  }
  }
};

</script>
