var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

let [a, b] = lines.map(num => parseInt(num))

const sum = (a, b) => a + b;
console.log(`SOMA = ${sum(a, b)}`)