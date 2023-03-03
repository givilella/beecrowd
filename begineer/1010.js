var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

let total = 0

lines.forEach((a) => {
    const prod = a.split(' ')
    const [id, qtde, preco] = prod.map(num => parseFloat(num))
    if (typeof qtde === 'number' && typeof preco === 'number'){
        let valor = qtde * preco
        total += valor 
    }else console.log('erro')
});

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)