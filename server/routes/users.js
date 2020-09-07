var express = require('express');
var router = express.Router();
//引入模型
var  User=require('./../models/user')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/test', function(req, res, next) {
  res.send('test');
});
//定义一个二级路由
router.post("/login",function(req,res,next){
//拿到前端传过来的参数
console.log(req.body)
var param={
  userName:req.body.userName,
  password:req.body.password
  
}

User.findOne(param,function(err,doc){
  if (err){
  res.json({
      status:"1",
      msg:err.message
    });
  }else{
    if(doc){//获取到了用户
      res.cookie("userId",doc.userId,{
        path:'/',
        maxAge:1000*60*60
      });
      res.cookie("userName",doc.userName,{
        path:'/',
        maxAge:1000*60*60
      });
      // req.session.user=doc;
    res.json({
        status:"0",
        msg:'',
        result:{
          userName:doc.userName
        }
      })
    }
  }
})
});
module.exports = router;
