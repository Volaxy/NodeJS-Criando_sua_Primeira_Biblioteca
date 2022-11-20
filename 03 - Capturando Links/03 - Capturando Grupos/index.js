import chalk from 'chalk';

import fs from 'fs';

const text = "São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).";

function extractLinks(text) {
	let regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
	let catchs = regex.exec(text);
	console.log(catchs);
}

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

extractLinks(text);

// Regular expression to identify the link inside the "()":
// /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)