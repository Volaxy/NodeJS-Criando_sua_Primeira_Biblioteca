import chalk from 'chalk';

import fs from 'fs';

function extractLinks(text) {
	let regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
	let catchs = [...text.matchAll(regex)]
		.map(match => ({ [match[1]]: match[2] }));
	console.log(catchs);
}

function errorHandler(error) {
	throw new Error(chalk.red(error.code, "File not found"));
}

async function readFile(path) {
	try {
		let data = await fs.promises.readFile(path, "utf-8");
	
		extractLinks(chalk.green(data));
	} catch (error) {
		errorHandler(error);
	} finally {
		console.log(chalk.yellow("Program finished"));
	}
}

export default readFile;