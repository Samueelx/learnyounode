import { IncomingMessage, get } from "http";
get(process.argv[2].toString(), (res: IncomingMessage)=> {
    let str: string = '';
    res.setEncoding('utf-8');
    res.on('data', (chunk: string) => {
        str += chunk;
    });
    res.on('end', () => {
        console.log(str.length);
        console.log(str);
    })
})