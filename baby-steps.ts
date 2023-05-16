const sum:number = process.argv.slice(2).reduce((accum, current) => {
    return accum + parseInt(current)
}, 0);

console.log(sum)