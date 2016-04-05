var http=require('http');
var bl = require('bl');

http.get(process.argv[2],function(response){
  response.setEncoding('utf8');
  // var list=[];
  // response.on('data',function(data){
  // list.push(data);
  // });
  // response.on('end',console.log(list));
  response.pipe(bl(function (err, data) {
    process.stdout.write(data.length+'\n');
    process.stdout.write(data.toString()+'\n');
  }));
  // response.on('error', console.error);
});
