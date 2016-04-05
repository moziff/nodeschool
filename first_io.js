var fs = require('fs');


buf_object=fs.readFileSync(process.argv[2]).toString().split("\n");
console.log(buf_object.length-1);
