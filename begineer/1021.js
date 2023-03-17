var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split(".");

const dinheiro = lines.map(num => Number(num));
const notas = ['nota(s)', 100, 50, 20, 10, 5, 2];
const moedas = ['moeda(s)', 1, 0.5, 0.25, 0.10, 0.05, 0.01];
let val = 0;

const quantidade = (array, valor, mult = 1) => {
    val *= mult;
    val += valor; 
    array.forEach((a) => {
        if (!isNaN(a)){
            let qtde = Math.floor(val / (a * mult));
            val -= qtde * (a * mult);
            console.log(`${qtde} ${array[0]} de R$ ${a.toFixed(2)}`);
        } 
    });
};

function main() {
    
    dinheiro.forEach((a, b) => {
        if(b == 0){
            console.log('NOTAS:');
            quantidade(notas, a);
        } else {
            console.log('MOEDAS:');
            quantidade(moedas, a, 100);
        }
    });
}

main();