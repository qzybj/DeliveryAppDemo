// var express = require(express);
// var app = q();
//
// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });
//
// var server = app.listen(3000, function () {
//     var host = server.address().address;
//     var port = server.address().port;
//
//     console.log('Example app listening at http://%s:%s, host, port');
// });
//
// app.post('/login', function (req, res) {
//     res.json({success: true, data: {authenticationToken: "abc01234567890defgh"}});
// });

////////////////
// app1.js
////////////////

// 加载所需模块
var http = require("http");

// 创建Server
var app = http.createServer(function(request, response) {
    if(request.url == '/'){
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end("Home Page!\n");
    } else if(request.url == '/about'){
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end("About Page!\n");
    } else{
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("404 Not Found!\n");
    }
});

// 启动Server
app.listen(1984, "localhost");