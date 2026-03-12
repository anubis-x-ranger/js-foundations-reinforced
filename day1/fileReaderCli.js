import fs from 'fs';


const file = fs.readFileSync('./sample.txt', 'utf8');

console.log(file)