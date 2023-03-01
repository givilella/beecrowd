var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

var total = 0

lines.forEach(function(a){
    let prod = a.split(' ')
    let [id, qtde, preco] = prod.map(num => parseFloat(num))
    let valor
    valor = qtde * preco
    total += valor 
});

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)