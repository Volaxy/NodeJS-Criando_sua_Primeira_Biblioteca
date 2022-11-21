import chalk from 'chalk';

import fs from 'fs';

import readFile from './index.js';
import validateLinks from './httpValidator.js';

let path = process.argv[2];
let validate = process.argv[3] === "--validate";

async function getResults(path) {
    try {
        fs.lstatSync(path);
    } catch (error) {
        if(error.code === "ENOENT") {
            console.log(chalk.red("File or directory not exists"));
            
            return;
        }
    }

    // If is a File
    if(fs.lstatSync(path).isFile()) {
        let links = await readFile(path);
    
        printLinks(validate, links);
    // If is a Directory
    } else if(fs.lstatSync(path).isDirectory()) {
        let files = await fs.promises.readdir(path);

        files.forEach(async file => {
            let links = await readFile(`${path}/${file}`);

            printLinks(validate, links, file);
        });
    }
}

function printLinks(validate, links, file = "") {
    if(validate) {
        console.log(chalk.magenta(file),
            chalk.yellow("Validated Links:"), validateLinks(links));
    } else {
        console.log(chalk.magenta(file),
           chalk.yellow("Links:"), links);
    }
}

getResults(path);