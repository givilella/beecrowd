var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let [a, b, c] = lines.map(num => parseFloat(num));

const triangle = (b, h) => b * h / 2;
const circle = r => r**2 * 3.14159;
const trapezium = (a, b, h) => (a + b) * h / 2;
const rectangle = (b, h) => b * h;
const square = l => l ** 2;

console.log(`TRIANGULO: ${triangle(a, c).toFixed(3)}\n
            CIRCULO: ${circle(c).toFixed(3)}\n
            TRAPEZIO: ${trapezium(a, b, c).toFixed(3)}\n
            QUADRADO: ${square(b).toFixed(3)}\n
            RETANGULO: ${rectangle(a, b).toFixed(3)}`);