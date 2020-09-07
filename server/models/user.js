var mongoose =require('mongoose')
var Schema=mongoose.Schema;

var UserSchema=new Schema({
 "UserId":String,
 "UserName":String,
 "PhoneNumber":String,
 'password':String,
 "emailAdress":String
});
module.exports=mongoose.model('User',UserSchema);