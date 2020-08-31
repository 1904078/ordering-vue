<template>
<div class="damu-navtab">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <a class="nav-link active" id="menu-tab" data-toggle="tab" href="#menu" role="tab" aria-controls="menu" aria-selected="true">
        Menu
        </a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">
        Reviews
        </a>
     </li>
    </ul>
    <div class="tab-content" id="myTabContent">
       <div class="tab-pane fade show active" id="menu" role="tabpanel" aria-labelledby="menu-tab">
           <div class="container " align="center">
                    <div class="row">
                        <div class="col-lg-2 col-md-2 col-sm-3 col-3">
                            <div class="list-group" id="Menu">
                                <a href="#" class="list-group-item active">Single item</a>
                                <a href="#" class="list-group-item">Meal</a>
                                <a href="#" class="list-group-item">Snack</a>
                                <a href="#" class="list-group-item">Drinks</a>
                            </div>
                        </div>
                        <!-- <div class="col-lg-2 col-md-2 col-sm-3 col-3">
                            <a href="#">
                                <img src="../../static\images\chips.jpg" class="damu-img">
                            </a>
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-6 col-6">
                            <div class="damu-intro">
                                <a href="#">
                                    <h4>Chicken burger </h4>
                                    <span>Chicken Chicken burgerChicken burgerChicken burger</span>
                                </a>
                            </div>
                            <div class="damu-product-details">
                                <span class="damu-price">£2.5</span>
                                <a href="javascript:;" class="damu-cart">
                                    <span class="fa fa-cart-plus"></span>
                                </a>
                            </div>
                        </div> -->
                        <div class=" col-lg-10 col-md-10 col-sm-9 col-9 ">
                            <div class="container damu-product">
                                <div class="row ">
                                    <div class="col-4 col-sm-4 col-md-4 col-lg-4">
                                        <a href="#">
                                            <img src="../../static\images\chips.jpg" class="damu-img">
                                        </a>
                                    </div>
                                    <div class="col-8 col-sm-8 col-md-8 col-lg-4">
                                        <div class="damu-intro">
                                            <a href="#">
                                                <h4>Chicken burger </h4>
                                                <span>Chicken Chicken burgerChicken burgerChicken burger</span>
                                            </a>
                                        </div>
                                        <div>
                                            <p class="damu-price">£2.5</p>
                                            <a href="javascript:;" class="damu-cart">
                                                <span class="fa fa-cart-plus"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    </div>
            </div>
       </div>
       <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
          <table class="table">
                    <tr class="success">
                        <td colspan="2">Product: <span>Chips</span></td>
                    </tr>
                    <tr>
                        <td>
                            <img style="width:20px" src="../../static\images/photo.jpg">
                        </td>
                        <td>User name: <span>Ailsa</span></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <p>It is very delicious.It is very delicious.It is very delicious
                            </p>
                        </td>
                    </tr>
                </table>
                <!---写评论------>
                <form role="form">
                    <div class="form-group">
                        <label for="name">Reviews</label>
                        <input type="text" class="form-control" placeholder="Write your review....">
                    </div>
                </form>
       </div>
</div>
</div>
</template>
<style scoped>
.damu-navtab{
    margin-bottom: 55px;
}
a {
    color:#b89f6c;
}
.list-group-item.active, 
.list-group-item.active:focus, 
.list-group-item.active:hover {
    color: #fff;
    background-color: #e2bf22;
    border-color: #997e07;
}
.damu-product{
    /* height: 100px; */
    margin-top:20px;
    margin-bottom:20px;
}
.damu-img {
    background-color: #fff;
    width:100%;
    /* height:100%; */
    overflow: hidden;
    padding-left:0;
    margin-top: 20px;
}
.damu-product-details{
         margin-top:10px;
}
 .damu-intro{
    padding-bottom: 1rem;
    margin-top:10px;
 }
 .damu-price,
 .damu-cart{
    display: block;
    float: left;
    margin-right: 2rem;
 }
 .fa {
    top: 4px;
 }
 #Menu{
     margin-top:20px;
     margin-bottom: 20px;
     width:100%;
 }
</style>