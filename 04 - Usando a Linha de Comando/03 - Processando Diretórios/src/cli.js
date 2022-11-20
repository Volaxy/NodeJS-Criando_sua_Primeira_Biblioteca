import chalk from 'chalk';

import fs from 'fs';

import readFile from './index.js';

let path = process.argv[2];

async function getResults(path) {
    if(fs.lstatSync(path).isFile()) {
        let links = await readFile(path);
    
        console.log(chalk.yellow("Links:"), links);
    } else if(fs.lstatSync(path).isDirectory()) {
        let files = await fs.promises.readdir(path);

        // If there are a "await function" inside the "forEach", the "async" word must be puted before the arguments
        files.forEach(async file => {
            let links = await readFile(`${path}/${file}`);

            console.log(links);
        });
    }
}

getResults(path);