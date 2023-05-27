import { IncomingMessage, get } from "http";
get(process.argv[2].toString(), (res: IncomingMessage) => {
    let strArray: string[] = [];
    res.setEncoding('utf8');
    res.on('data', (chunk: string) => {
        strArray.push(chunk);
    });
    res.on('end', () => {
        strArray.forEach((str: string) => console.log(str));
    });
});