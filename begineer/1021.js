var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

let valor = lines.map(num => parseFloat(num))

const notas = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01]

notas.forEach((a) => {
    let qtde = Math.trunc(valor / a);
    valor -= qtde * a 
    console.log(`${qtde} ${valor > 1 ? dict = 'nota(s)' : 'moeda(s)'} de R$${a.toFixed(2)}`)
});
