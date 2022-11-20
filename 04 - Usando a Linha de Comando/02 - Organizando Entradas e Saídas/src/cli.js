import chalk from 'chalk';

import readFile from './index.js';

let filePath = process.argv[2];

async function getResults(path) {
    let result = await readFile(path);

    console.log(chalk.yellow("Results:"), result);
}

getResults(filePath);