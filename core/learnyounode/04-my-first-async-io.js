var fs = require('fs')
fs.readFile(process.argv[2], function callback (err, workingfile) { 
			if (err) {
				console.log(err);
			}			
			else {
				var str = workingfile.toString();
				var linelist = str.split("\n");
				console.log(linelist.length-1);				
			}	 
});


// Optimal Lösung:
var fs = require('fs')
var file = process.argv[2]
    
    fs.readFile(file, function (err, contents) {
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })

