var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

const ddd = String(lines);

const dddList = [
    {'id':'61','name':'Brasilia'},
    {'id':'71','name':'Salvador'},
    {'id':'11','name':'Sao Paulo'},
    {'id':'21','name':'Rio de Janeiro'},
    {'id':'32','name':'Juiz de Fora'},
    {'id':'19','name':'Campinas'},
    {'id':'27','name':'Vitoria'},
    {'id':'31','name':'Belo Horizonte'}
];

function main() {
    const dddSelecionado = dddList.find((dddBuscado) => dddBuscado.id === ddd);
    console.log(dddSelecionado.name);
}

main();