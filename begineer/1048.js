var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split(" ");

const salario = lines.map(num => Number(num));

/* const reajuste = (salario) => {

    if(salario <= 400) console.log(`Novo salario: ${(salario * 1.15).toFixed(2)}\nReajuste ganho: ${(salario * 0.15).toFixed(2)}\nEm percentual: 15 %`);
    if(salario <= 800) console.log(`Novo salario: ${(salario * 1.12).toFixed(2)}\nReajuste ganho: ${(salario * 0.12).toFixed(2)}\nEm percentual: 12 %`);
    if(salario <= 1200) console.log(`Novo salario: ${(salario * 1.1).toFixed(2)}\nReajuste ganho: ${(salario * 0.1).toFixed(2)}\nEm percentual: 10 %`);
    if(salario <= 2000) console.log(`Novo salario: ${(salario * 1.07).toFixed(2)}\nReajuste ganho: ${(salario * 0.07).toFixed(2)}\nEm percentual: 7 %`);
    if(salario > 2000) console.log(`Novo salario: ${(salario * 1.04).toFixed(2)}\nReajuste ganho: ${(salario * 0.04).toFixed(2)}\nEm percentual: 4 %`);
}

reajuste(salario) */
const faixas =[
    {limite: 400, percentual: 0.15},
    {limite: 800, percentual: 0.12},
    {limite: 1200, percentual: 0.1},
    {limite: 2000, percentual: 0.07},
    {limite: Infinity, percentual: 0.04}
];

const reajuste = (salario, faixas) => {
    faixas.forEach(faixa => {
        if(salario <= faixa.limite) 
            faixa.percentual
    });
};

function main (){

    console.log(`Novo salario: ${salario * (1 + reajuste(salario, faixas))}\nReajuste ganho: ${salario * reajuste(salario, faixas)}\nEm percentual: ${100 * reajuste(salario, faixas)}`)
}

main()
