var express = require('express');
var router = express.Router();
//引入模型
var  User=require('./../models/user')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//定义一个二级路由
router.post("/login",function(req,res,next){
//拿到前端传过来的参数
var param={
  userName:req.body.userName,
  password:req.body.password
}
console.log("111")
console.log(param)
User.findOne(param,function(err,doc){
  console.log("222")
  console.log(param)
  if (err){
    console.log("err")
  res.json({
      status:"1",
      msg:err.message,
    });
  }else{
    if(doc){//获取到了用户
      console.log("doc")
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

//登出接口
router.post("/logout", function (req,res,next) {
  res.cookie("userId","",{
    path:"/",
    maxAge:-1
  });
  res.json({
    status:"0",
    msg:'',
    result:''
  })
});
module.exports = router;
