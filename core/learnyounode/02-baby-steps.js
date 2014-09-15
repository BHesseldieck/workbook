var result = 0;
for (var count = 2; count < process.argv.length; count++) {
	parseInt(process.argv[count]);
	result = parseInt(process.argv[count]) + result;
}

console.log(result)