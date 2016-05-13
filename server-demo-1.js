var http = require('http');
http.createServer(function(req,res){
  //通过req.url来获取请求资源
  var path = req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();
  switch (path) {
    case '':
      res.writeHead(200,{'Content-Type':'text/pain'});
      res.end('Homepage');
      break;
    case '/about':
      res.writeHead(200,{'Coutent-Type':'text/plain'});
      res.end('About');
      break;
    default:
      res.writeHead(404,{'Coutent-Type':'text/plain'});
      res.end('Not Found');
      break;
  }
}).listen(3000);

console.log('Server started on localhost:3000;Ctrl-C to terminate.....');
