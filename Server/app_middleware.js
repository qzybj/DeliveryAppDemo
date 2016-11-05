////////////////
// app_middleware.js
//middleware是一个概念；而上面的Connect，是一个Http Server Framework，基于Http module扩展，可以说它是Express.js的前身。
// 所以可以把Connect等价看作Express.js
////////////////

// 加载所需模块
var express = require("express");
var http = require("http");

// 创建server
var app = express();

// 增加一些middleware
app.use(function(request, response, next) {
    console.log("step1, url:" + request.url);
    next();
});
app.use(function(request, response, next) {
    console.log("step2");
    if(request.url == '/'){
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end("Main Page!\n");
    }
    next();
});
app.use(function(request, response, next) {
    console.log("step3");
    if(request.url == '/about'){
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end("About Page!\n");
    }
});


// 启动server
http.createServer(app).listen(1984);