var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split(".");

const valor = lines.map(num => Number(num))

console.log(valor)

const notas = [100, 50, 20, 10, 5, 2, 1]
const moedas = [50, 25, 10, 5, 1]

function quantidade (array,valor) {
    array.forEach((a, b, c) => {
        let qtde = Math.floor(valor / a);
        valor -= qtde * a;
        console.log(`${qtde}`);
    })
};
valor.forEach((a,b) => {
    if(b == 0){
        quantidade(notas, a);
    } else {
        quantidade(moedas, a);
    }
})