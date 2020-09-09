var express=require('express')
var router=express.Router();
var mongoose=require('mongoose');
var product=require('./../models/product');
var User=require('./../models/user');

mongoose.connect('mongodb://127.0.0.1:27017/ordering',{useUnifiedTopology:true,useNewUrlParser: true });
mongoose.connection.on("connected",function(){
    console.log("MongoDB connected success")
});
mongoose.connection.on("error",function(){
    console.log("MongoDB connected fail")
});
mongoose.connection.on("disconnected",function(){
    console.log("MongoDB  disconnected")
});

router.get("/list",function(req,res,next){
    product.find({},function(err,doc){
        if(err){
            res.json({
                status:'1',
                msg:err.message

            })
        }else{
            res.json({
                status:'0',
                msg:'',
                result:{
                    count:doc.length,
                    list:doc
                }
            })
        }
    })
})

//加到购物车
router.post("/addCart",function(req,res,next){
    //先得到当前登录的用户
var userId='001',productId=req.body.productId;
console.log("product"+productId);
// var User=require('./../models/user');
//得到用户信息
User.findOne({userId:userId},function(err,userDoc){
    if(err){
        res,json({
            status:"1",
            msg:err.message,
        })
    }else{
        if(userDoc){
            let productItem='';
            userDoc.cartList.forEach(function(item){
                if(item.productId==productId){
                    productItem=item;
                    item.productNumber++;
                }
            });
            if(productItem){
                userDoc.save(function(err2,doc2){
                    if(err2){
                       res.json({
                           stauts:"1",
                           msg:err2.message,
                       })
                    }else{
                        res.json({
                            status:'0',
                            msg:'',
                            result:'success'
                        })
                    }
                });
            }else{
                product.findOne({productId:productId},function(err1,doc){
                    // console.log("doc"+doc);
                     if(err1){
                         res.json({
                             stauts:'1',
                             msg:err1.message,
                         })
                     }else{
                         if(doc){
                             doc.productNumber=1;
                             doc.checked=1;
                            //  console.log("doc"+doc.checked);
                             userDoc.cartList.push(doc);
                             console.log("productNumber"+doc.productNumber);
                             console.log("userDoc.productNumber"+userDoc.cartList.productNumber);
                              console.log("userDoc"+userDoc);
                             userDoc.save(function(err2,doc){
                                 if(err2){
                                    res.json({
                                        stauts:"1",
                                        msg:err2.message,
                                    })
                                 }else{
                                     res.json({
                                         status:'0',
                                         msg:'',
                                         result:'success'
                                     })
                                 }
                             });
                            
                         }
                     }
                 });
            }
       
        }   
    }
}) 
});
module.exports = router;