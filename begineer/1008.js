var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

let [id, hour, sal] = lines.map(num => parseFloat(num));

const salary = (s, h) => s * h;
console.log(`NUMBER = ${id}\nSALARY = U$ ${salary(sal, hour).toFixed(2)}`);