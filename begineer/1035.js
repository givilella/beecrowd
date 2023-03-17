var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split(" ");

let [a, b, c, d] = lines.map(num => Number(num));

const condicoes = [b > c, d > a, (c + d) > (a + b), c > 0, d > 0, a % 2 === 0];

let i = 0;
while (i < condicoes.length) 
    if (condicoes[i]){
        i++;
    } else {
        break;
    }

(i == condicoes.length) ? console.log('Valores aceitos') : console.log('Valores nao aceitos')