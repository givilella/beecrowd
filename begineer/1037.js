var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

const valor = Number(lines)

switch(true){
    case (valor >= 0 && valor <= 25):
        console.log('Intervalo [0,25]');
        break;
    case (valor > 25 && valor <= 50):
        console.log('Intervalo (25,50]');
        break;
    case valor > 50 && valor <= 75:
        console.log('Intervalo (50,75]');
        break;
    case valor > 75 && valor <= 100:
        console.log('Intervalo (75,100]');
        break;
    default:
        console.log('Fora de intervalo')
};