var express = require('express');
var app = express();
//创建试图引擎
var handlebars = require('express4-handlebars').create({defaultLayout:'main'});
//设置express视图引擎
      app.engine('handlebars',handlebars.engine);
//设置默认视图引擎
      app.set('view engine','handlebars');


app.set('port',process.env.PORT || 3000);

//路由配置必须在404之前
app.get('/',function(req,res){
  res.type('text/plain');
  res.send('Meadowlark Travel');
});
//app.get是Express添加路由的方法
app.get('/about',function(req,res){
  //about可以使用通配符about*
  res.type('text/plain');
  res.send('About Meadowlark Travel');
});

//定制404,app.use是Express添加中间件的方法
app.use(function(req,res,next){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});
//定制500,app.use是Express添加中间件的方法
app.use(function(err,req,res,next){
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(app.get('port'),function(){
  console.log('Express started on http://localhost:'+
  app.get('port')+'; press Ctrl-C to terminate.');
});
