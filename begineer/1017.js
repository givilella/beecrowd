var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

let [time, speed] = lines.map(num => parseInt(num))

const fuel = (a, b) => a * b / 12;

console.log(`${fuel(time, speed).toFixed(3)}`)