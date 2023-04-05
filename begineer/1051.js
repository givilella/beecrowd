var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split(" ");

const salario = 4520.00;

const taxas =[
    {limite: 2000, percentual: 0},
    {limite: 3000, percentual: 0.08},
    {limite: 4500, percentual: 0.18},
    {limite: Infinity, percentual: 0.28}
];

const reajuste = (salario, taxas) => {
    for (let i = taxas.length - 1; i >= 0; i--) {
      if (salario >= taxas[i].limite) {
        return taxas[i].percentual;
      }
    }
  };

function main() {
  if (salario > 2000) {
    console.log(`R$ ${((salario - 2000) * reajuste(salario, taxas)).toFixed(2)}`);
  } else {
    console.log('Isento');
  }
}

main();

//errado