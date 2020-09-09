var mongoose =require('mongoose')
var Schema=mongoose.Schema;

var UserSchema=new Schema({
 "userId":String,
 "userName":String,
 "phoneNumber":String,
 'password':String,
 "emailAdress":String,
 "cartList":[
    {
      "productId":String,
      "productName":String,
      "salePrice":Number,
      "productNumber":Number,
      'productIntro':String,
      "productImage":String, 
      "checked":String,
    }
  ],
  "orderList":Array,
});
module.exports=mongoose.model('User',UserSchema);