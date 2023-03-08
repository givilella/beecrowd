var input = require("fs").readFileSync("stdin", "utf8");
var valor = input.trim().split("\n");

const array = [100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05, 0.01]
let tipo = 'nota(s)'
let qtde

console.log('NOTAS:')
array.forEach((a, b) => {
    if (b == 6){
        console.log('MOEDAS:')
        tipo = 'moeda(s)'
    }
    if (b == 9){
        valor += 0.001
    }
    qtde = Math.floor(valor / a);
    valor -= qtde * a;

    console.log(`${qtde} de ${tipo} de ${a}`);
});

refazer