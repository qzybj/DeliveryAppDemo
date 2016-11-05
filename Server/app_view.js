////////////////
// app_view.js
//Express加入了View处理机制
////////////////
var express = require("express");
var app = express();

// 模板目录：./views
app.set("views", __dirname + "/views");

// 使用jade引擎
app.set("view engine", "jade");

// 寻址views/index，提交jade渲染，并返回结果
app.get("/", function(request, response) { response.render("index", { message: "I'm hyddd" }); });