var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

let [a, b, c] = lines.map(num => parseInt(num))

const media = (a, b, c) => a * 0.2 + b * 0.3 + c * 0.5;
console.log(`MEDIA = ${media(a, b, c).toFixed(1)}`)

