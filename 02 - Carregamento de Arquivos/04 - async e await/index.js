import chalk from 'chalk';

import fs from 'fs';

function errorHandler(error) {
	throw new Error(chalk.red(error.code, "File not found"));
}

async function readFile(path) {
	try {
		let data = await fs.promises.readFile(path, "utf-8");
	
		console.log(chalk.green(data));
	} catch (error) {
		errorHandler(error); // This line is commented because she is executed before the correct code, interrupting the program and only show the message error
		// console.log(error);
	} finally {
		console.log(chalk.yellow("Program finished"));
	}
}

readFile("./files/texto.md");
readFile("./files/texto");