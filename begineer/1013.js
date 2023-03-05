var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let num = lines.map(num => parseFloat(num));
let maior = Math.max.apply(null, num);

console.log(`${maior} eh o maior`);