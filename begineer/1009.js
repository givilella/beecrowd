var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

const nome = lines.shift();
let [sal, vendas] = lines.map(num => parseFloat(num))

const salarioTotal = (s, v) => (s + v * 0.15) 
console.log(`TOTAL = R$ ${salarioTotal(sal, vendas).toFixed(2)}`)