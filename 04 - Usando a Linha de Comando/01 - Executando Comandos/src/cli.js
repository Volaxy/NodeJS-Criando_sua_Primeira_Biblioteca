import readFile from './index.js';

let path = process.argv; // Get the characters when the command "node" is called, the 1st is the executable node bin files, and the 2st is the path of the file to be executed with "node" command
// The next values are passed through the "node" command separated by "SPACE"

readFile(path[2]);