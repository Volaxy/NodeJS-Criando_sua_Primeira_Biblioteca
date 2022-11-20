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
		errorHandler(error);
	} finally {
		console.log(chalk.yellow("Program finished"));
	}
}

readFile("./files/texto.md");

// Regular expression to identify the text inside the "[]":
// \[[^[\]]*?\] = [text], [~f`fàç~iã], [other text]
// Identify any text inside the "[]" without the '[' or ']' among the text