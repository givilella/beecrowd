var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const notas = [100, 50, 20, 10, 5, 2, 1];
let valor = Number(lines);
console.log(valor)

notas.forEach(a => {
    const qtde = Math.trunc(valor / a);
    valor -= qtde * a;
    console.log(`${qtde} nota(s) de R$ ${a},00`);
});