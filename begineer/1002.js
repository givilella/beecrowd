var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.trim().split('\n');

let [a, b] = lines.map(num => parseFloat(num));

const soma = (a, b) => a + b;
console.log(`x = ${soma(a, b)}`);