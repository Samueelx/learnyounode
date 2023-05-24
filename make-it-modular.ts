import myModule from "./mymodule";;
myModule(process.argv[2], process.argv[3], (err: any, data: string[]) => {
    if(err) console.error("An error occured")
    else {
        data.forEach(file => console.log(file))
    }
});