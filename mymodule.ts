import { readdir } from "fs";
import { extname } from "path";

const myModule: Function = (dir: string, ext: string, callback: Function) => {
    readdir(dir, (err, files: string[]): void => {
        if (err) callback(err);
        else {
            const filtered: string[] = files.filter((file: string) => extname(file) === `.${ext}`);
            callback(null, filtered);
        }
    });
}

export default myModule;