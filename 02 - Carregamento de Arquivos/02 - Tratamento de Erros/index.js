import chalk from 'chalk'; // This is the new way to use a library in the project on ES6, to avoid errors, in the "package.json", just enter ""type": "module"" in the properties file

import fs from 'fs';

function errorHandler(error) {
	throw new Error(chalk.red(error.code, "File not found"));
}

function readFile(path) {
	fs.readFile(path, "utf-8", (error, data) => {
		if(error)
			errorHandler(error);
		
		console.log(chalk.green(data));
	});
}

readFile("./files/text.md");