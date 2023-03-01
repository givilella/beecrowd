var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

let [x, y] = lines.map(num => parseFloat(num))
console.log(`${(x/y).toFixed(3)} km/l`)
