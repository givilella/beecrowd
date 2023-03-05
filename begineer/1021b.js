var input = require("fs").readFileSync("stdin", "utf8");
var valor = input.trim().split("\n");

console.log(valor / 100)

const array = [/*100, 50, 20, 10, 5, 2,*/ 1, 0.50, 0.25, 0.10, 0.05, 0.01]

let qtde
array.forEach((a, b) => {
    qtde = valor / a 
    console.log(qtde);
});

/* valor.forEach((a,b) => {
    if(b == 0){
        quantidade(notas, a);
    } else {
        quantidade(moedas, a);
    }
}) */