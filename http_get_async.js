var http=require('http');
var bl = require('bl');
var asyn = require("async");


task_array={};
asyn.parallel([
    function(callback) { //This is the first task, and callback is its callback task
      http.get(process.argv[2],function(response){
        response.setEncoding('utf8');
        response.pipe(bl(function (err, data) {
          task_array.one=data.toString();
          callback();
        }));
      });
    },
    function(callback) { //This is the first task, and callback is its callback task
      http.get(process.argv[3],function(response){
        response.setEncoding('utf8');
        response.pipe(bl(function (err, data) {
          task_array.two=data.toString();
          callback();
        }));
      });
    },
    function(callback) { //This is the first task, and callback is its callback task
      http.get(process.argv[4],function(response){
        response.setEncoding('utf8');
        response.pipe(bl(function (err, data) {
          task_array.three=data.toString();
          callback();
        }));
      });
    }
], function(err,results) { //This is the final callback
  console.log(task_array.one);
  console.log(task_array.two);
  console.log(task_array.three);
});
