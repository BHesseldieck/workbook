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


