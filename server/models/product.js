var mongoose =require('mongoose')
var Schema=mongoose.Schema;

var productSchema=new Schema({
 "productId":String,
 "productName":String,
 "salePrice":Number,
 "producrNumber":Number,
 'productIntro':String,
 "productImage":String
});
module.exports=mongoose.model('Product',productSchema);