let user=require('./User');
console.log(`userName:${user.userName}`);
console.log(`userName:${user.sayHello()}`);

let http=require('http');
let server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-type","text/plain;charset=utf-8");
    res.end("Hello,Node.js");
});
server.listen(3000,'127.0.0.1',()=>{
    console.log("服务器已经运行")
})