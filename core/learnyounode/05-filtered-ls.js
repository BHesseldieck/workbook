var fs = require('fs');
var path = require('path');
var directory =  process.argv[2];


fs.readdir(directory, function callback (err, list) { 
					if (err) {
						console.log(err)		
			}
					else {
					for (var count = 0; count < list.length; count++){
						if (path.extname(list[count]) == "." + process.argv[3]) {
						console.log(list[count]);
						  }
						}
			}
});

// Optimal Solution:

    var fs = require('fs')
    var path = require('path')
    
    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })