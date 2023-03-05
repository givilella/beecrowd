var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

let raio = Number(lines);

const sphere = r => (4/3) * 3.14159 * r**3;
console.log(`VOLUME = ${sphere(raio).toFixed(3)}`);