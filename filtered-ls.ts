import { readdir } from "fs/promises";
import { extname } from "path";

const unfilteredList: string[] = await readdir(process.argv[2]);
const filteredList: string[] = unfilteredList.filter((filename: string) => {
    return extname(filename) === `.${process.argv[3]}`;
});

filteredList.forEach((listItem: string) => console.log(listItem));