var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

let valor = lines.map(num => parseInt(num))

const tempo = [3600, 60, 1]
let result = []

tempo.forEach((a) => {
    let qtde = Math.trunc(valor / a);
    valor -= qtde * a 
    result.push(qtde)
});
console.log(`${result[0]}:${result[1]}:${result[2]}`)