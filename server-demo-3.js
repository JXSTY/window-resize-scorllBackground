var fortunes = [
"Conquer your fears or they will conquer you.", "Rivers need springs.",
"Do not fear what you don't know.",
"You will have a pleasant surprise.",
"Whenever possible, keep it simple.",
];

var express = require('express');
var app = express();
//创建试图引擎
var hbs = require('express3-handlebars');
//设置express视图引擎
      app.engine('handlebars',hbs({defaultLayout:'main'}));
//设置默认视图引擎
      app.set('view engine','handlebars');
      // app.set('view engine','handlebars');
//设置监听端口
      app.set('port',process.env.PORT || 3000);
//使用模版引擎之后不在指定内容类型和状态码
//静态文件路由
app.use(express.static(__dirname + '/public'));


//路由配置必须在404之前
app.get('/',function(req,res){
  res.render('home');
});
//app.get是Express添加路由的方法
app.get('/about',function(req,res){
  //about可以使用通配符about*
  var randomFortune =
    fortunes[Math.floor(Math.random() * fortunes.length)];//Math.floor(x)，x向下取整
  res.render('about', { fortune: randomFortune });
});
//定制404,catch-all 处理器（中间件）
app.use(function(req,res,next){
  res.status(404);
  res.render('404');
});
//定制500,app.use是Express添加中间件的方法
app.use(function(err,req,res,next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});
app.listen(app.get('port'),function(){
  console.log('Express started on http://localhost:'+
  app.get('port')+'; press Ctrl-C to terminate.');
});
