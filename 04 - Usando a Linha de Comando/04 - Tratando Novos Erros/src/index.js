import chalk from 'chalk';

import fs from 'fs';

function extractLinks(text) {
	let regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
	let catchs = [...text.matchAll(regex)]
		.map(match => ({ [match[1]]: match[2] }));

	// If there are no occurrences return a message
	return catchs.length ? catchs : chalk.red("No matches founded");
}

function errorHandler(error) {
	throw new Error(chalk.red(error.code, "File not found"));
}

async function readFile(path) {
	try {
		let data = await fs.promises.readFile(path, "utf-8");
	
		return extractLinks(data);
	} catch (error) {
		errorHandler(error);
	}
}

export default readFile;