import chalk from 'chalk';

import fs from 'fs';

import readFile from './index.js';

let path = process.argv[2];

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
    
        printLinks(links);
    // If is a Directory
    } else if(fs.lstatSync(path).isDirectory()) {
        let files = await fs.promises.readdir(path);

        files.forEach(async file => {
            let links = await readFile(`${path}/${file}`);

            printLinks(links, file);
        });
    }
}

    function printLinks(links, file = "") {
        console.log(chalk.magenta(file),
            chalk.yellow("Links:"), links);
    }

getResults(path);