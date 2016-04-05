var fs = require('fs');
var http= require('http');

var server = http.createServer(function(req,res){
  var rstream = fs.createReadStream(process.argv[3]);
  rstream.pipe(res);
});

server.listen(process.argv[2]);
