import chalk from 'chalk';

import fs from 'fs';

function errorHandler(error) {
	throw new Error(chalk.red(error.code, "File not found"));
}

function readFile(path) {
	fs.promises.readFile(path, "utf-8")
		.then(data => console.log(chalk.green(data)))
		// .catch(error => errorHandler(error)) - This line is equal than the line above
		.catch(errorHandler);

}

readFile("./files/texo.md");