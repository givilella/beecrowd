var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split(" ");

const values = lines.map(num => Number(num)).sort(function(a,b){
    return b - a;
});
const [a, b, c] = values;

const ehTriangulo = (a, b, c) => a < (b + c);

const trianguloRetangulo = (a, b, c) => (a**2) == (b**2 + c**2);
const trianguloObtusangulo = (a, b, c) => (a**2) > (b**2 + c**2);
const trianguloAcutangulo = (a, b, c) => (a**2) < (b**2 + c**2);

const trianguloEquilatero = (a, b, c) => a === b && b === c;
const trianguloIsoceles = (a, b, c) => a === b || b === c || c === a;

const angulos = {
    'TRIANGULO ACUTANGULO': trianguloAcutangulo(...values),
    'TRIANGULO OBTUSANGULO': trianguloObtusangulo(...values),
    'TRIANGULO RETANGULO': trianguloRetangulo(...values),
};

const lados = {
    'TRIANGULO EQUILATERO': trianguloEquilatero(...values),
    'TRIANGULO ISOSCELES': trianguloIsoceles(...values)
};

function main () {
    if(ehTriangulo(...values)){
        const angulo = Object.keys(angulos).find((angulo) => angulos[angulo]);
        console.log(angulo);
        if(angulo !== 'TRIANGULO RETANGULO'){
            const lado = Object.keys(lados).find((lado) => lados[lado]);
            console.log(lado);
        }
    } else {
        console.log('NAO FORMA TRIANGULO');
    }
}

main();