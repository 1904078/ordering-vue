var mongoose =require('mongoose')
var Schema=mongoose.Schema;

var productSchema=new Schema({
 "productId":String,
 "productName":String,
 "salePrice":Number,
 "productNumber":Number,
 'productIntro':String,
 "productImage":String,
 "checked":String
});
module.exports=mongoose.model('Product',productSchema);