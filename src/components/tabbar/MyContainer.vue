<template>
    <div>
        <nav-bread>
            <span>My order</span>
        </nav-bread>
        <div class="container damu-myaccount-wrap">
        <div class="row">
            <div class="col-md-8 col-sm-10  col-10">
                <ul class="list-group">
                    <li class="list-group-item ">
                        <span class="damu-my-infoName">User name</span>
                        <span class="damu-my-info">Ailsa</span>
                    </li>
                    <li class="list-group-item ">
                        <span class="damu-my-infoName">Phone number</span>
                        <span class="damu-my-info">12345678901</span>
                    </li>
                    <li class="list-group-item ">
                        <span class="damu-my-infoName">Email</span>
                        <span class="damu-my-info">123456@qq.com</span>
                    </li>
                </ul>
                <!-- <div class="col-md-6 col-sm-6 col-6"> -->
                    <div class="damu-my-button-wrap">
                        <button class="btn  btn-default damu-form-button" type="button">Edit</button>
                    </div>
                <!-- </div> -->
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import NavBread from '../NavBread.vue'
// import NavFooter from'@/components/NavFooter.vue'
export default {
    components:{
        NavBread,
    }
}
</script>
<style scoped>
.list-group-item {
    margin-bottom: 10px;
    border:none;
}
.damu-my-info{
    float: right;
}
.damu-img {
    background-color: #fff;
    /* width:100%;
    height:100%; */
    overflow: hidden;
    padding-left:0;
    margin-top: 20px;
}
.damu-my-button-wrap {
    margin: 20px auto;
    width: 20%;
    background-color: #fad221;
    border-color: #f7ce1a;
    text-align: center;
}
.damu-form-button {
color: #fff;
background-color: #fad221;
border:none;
width:110px;
}
</style>>
</style>