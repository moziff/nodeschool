var http=require('http');


http.get(process.argv[2],function(response){
  response.setEncoding('utf8');
  response.on('data', function(data){
    // data.forEach(function(ele){
    //   process.stdout.write(ele + );
    // });
    process.stdout.write(data+'\n');
  });
});
