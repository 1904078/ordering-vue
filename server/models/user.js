var mongoose =require('mongoose')
var Schema=mongoose.Schema;

var UserSchema=new Schema({
 "userId":String,
 "userName":String,
 "phoneNumber":String,
 'password':String,
 "emailAdress":String
});
module.exports=mongoose.model('User',UserSchema);