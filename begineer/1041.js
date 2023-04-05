var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split(" ");

const coordenadas = lines.map(num => Number(num));

const quadrante = (x ,y) => {
    switch (true) {
        case (x > 0 && y > 0):
            console.log('Q1');            
            break;
        case (x < 0 && y > 0):
            console.log('Q2');           
            break;
        case (x < 0 && y < 0):
            console.log('Q3');            
            break;
        case (x > 0 && y < 0):
            console.log('Q4');            
            break;
        case (x == 0 && y != 0):
            console.log('Eixo Y');            
            break;
        case (x != 0 && y == 0):
            console.log('Eixo X');            
            break;
        default:
            console.log('Origem');
            break;
    }  
}

function main () {
    quadrante(...coordenadas);
}

main();