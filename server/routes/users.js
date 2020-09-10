var express = require('express');
var router = express.Router();
//引入模型
var  User=require('./../models/user');
// const { use } = require('vue/types/umd');
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
// console.log("111")
// console.log(param)
User.findOne(param,function(err,doc){
  // console.log("222")
  // console.log(param)
  if (err){
    // console.log("err")
  res.json({
      status:"1",
      msg:err.message,
    });
  }else{
    if(doc){//获取到了用户
      // console.log("doc")
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
//校验
router.get("/checkLogin",function(req,res,next){
if(req.cookies.userId){
  res.json({
    status:'0',
    msg:'',
    result:req.cookies.userName||''
  })
}else{
  res.json({
    status:'0',
    msg:'Not logged in',
    result:''
  })
}
});
//查询当前用户的购物车数据购物车
router.get("/cartList",function(req,res,next){
 var userId=req.cookies.userId;
 User.findOne({userId:userId},function(err,doc){
   if(err){
     res.json({
       status:'1',
       msg:err.message,
       result:''
     })
   }else{
     if(doc){
       res.json({
         status:'0',
         msg:'',
         result:doc.cartList
       });
     }
   }
 })
});
//购物车删除
router.post("/cartDel",function(req,res,next){
var userId=req.cookies.userId,productId=req.body.productId;
User.update({userId:userId},{$pull:{'cartList':{'productId':productId}}},function(err,doc){
  if(err){
    res.json({
      status:'1',
      msg:err.message,
      result:''
    })
  }else{
    res.json({
      status:'0',
      msg:'',
      result:'success'
    })
  }
});
});
// 修改商品数量
router.post("/cartEdit", function (req,res,next) {
  var userId = req.cookies.userId,
      productId = req.body.productId,
      productNumber = req.body.productNumber,
      checked = req.body.checked;
  User.update({"userId":userId,"cartList.productId":productId},{
    "cartList.$.productNumber":productNumber,
    "cartList.$.checked":checked,
  }, function (err,doc) {
    if(err){
      res.json({
        status:'1',
        msg:err.message,
        result:''
      });
    }else{
      res.json({
        status:'0',
        msg:'',
        result:'suc'
      });
    }
  });
});
//
router.post("/editCheckAll",function(req,res,next){
  var userId = req.cookies.userId,
      checkAll = req.body.checkAll?'1':'0';
  User.findOne({userId:userId},function(err,user){
    if(err){
      res.json({
        status:'1',
        msg:err.message,
        result:''
      });
    }else{
      if(user){
        user.cartList.forEach((item)=>{
          item.checked=checkAll;
        })
        user.save(function(err1,doc){
          if(err1){
            res.json({
              status:'1',
              msg:err1.message,
              result:''
            });
          }else{
            res.json({
              status:'0',
              msg:'',
              result:'success'
            });
          }
        })
      }
    }
  });
});
module.exports = router;
