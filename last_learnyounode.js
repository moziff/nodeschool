var http = require('http');
var url = require('url');
var moment = require('moment');
var my_hash={};
// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var queryData = url.parse(request.url, true).query;
  response.writeHead(200, {"Content-Type": "text/plain"});
  var my_date= new Date(queryData.iso);

  if (url.parse(request.url, true).pathname==='/api/parsetime') {
    my_hash.hour = my_date.getHours();
    my_hash.minute= my_date.getMinutes();
    my_hash.second= my_date.getSeconds();
    // user told us their name in the GET request, ex: http://host:8000/?name=Tom
    response.end(JSON.stringify(my_hash));
  }
  else if (url.parse(request.url, true).pathname==='/api/unixtime') {
    new_hash={"unixtime":my_date.getTime()};
    response.end(JSON.stringify(new_hash));
  }
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(process.argv[2]);
