var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

let [a, b] = lines.map(num => parseFloat(num))

const media = (a, b) => (a * 3.5 + b * 7.5) / 11;
console.log(`MEDIA = ${media(a, b).toFixed(5)}`)
