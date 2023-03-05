var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let raio = lines.map(num => parseFloat(num));

const area = r => r**2 * 3.14159;
console.log(`A=${area(raio).toFixed(4)}`);