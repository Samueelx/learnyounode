import { readFileSync } from "fs";
/**
 * In your generated js file, in line 1, use: 
 *      const fs = require('fs');
 */

const buf: Buffer = readFileSync(process.argv[2]);
const newLines: number = buf.toString().split("\n").length
console.log(newLines - 1);