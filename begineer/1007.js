var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

let [a, b, c, d] = lines.map(num => parseInt(num))

const diffe = (a, b, c, d) => a * b - c * d;
console.log(`DIFERENCA = ${diffe(a, b, c, d)}`)
