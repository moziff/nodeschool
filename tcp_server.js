var net = require('net');
var dateFormat = require('dateformat');
var moment=require('moment');

var server = net.createServer(function (socket) {
  // socket handling logic
  data=moment(new Date()).format("YYYY-MM-DD HH:mm");

  // var data=dateFormat(result.request_date, "yyyy-mm-dd h:MM");

  socket.end(data+"\n");

});

server.listen(process.argv[2]);
