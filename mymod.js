var fs = require('fs');
var path=require('path');
// function mymodule(path,extension, callbackfunction ) {
//
// }
//
// fs.readdir(path,extension,function(err,list){
//   for (var i = 0; i < list.length; i++) {
//     if (list[i].split('.')[1]=== extension)
//         console.log(list[i]);
//   }
// });

module.exports = function (path_site,extension, callback){
    fs.readdir(path_site,function(err,list){
      if (err) return callback(err);
      list=list.filter(function(data){
        return path.extname(data)==="."+extension;
      });
      callback(null,list);
    });
};
