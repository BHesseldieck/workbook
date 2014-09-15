var fs = require('fs')
var workingfile = fs.readFileSync(process.argv[2]);
var str = workingfile.toString()

var linelist = str.split("\n");
console.log(linelist.length-1);

