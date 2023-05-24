import { FileHandle, open } from "fs/promises";

const fd: FileHandle = await open(process.argv[2]);
const buf: Buffer = await fd.readFile();
await fd.close();

const lines = buf.toString().split("\n").length
console.log(lines - 1)