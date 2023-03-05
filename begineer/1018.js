var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const notas = [100, 50, 20, 10, 5, 2, 1];

console.log(Number(lines));
notas.forEach(a => {
    let qtde = Math.trunc(lines / a);
    lines -= qtde * a;
    console.log(`${qtde} nota(s) de R$${a.toFixed(2)}`);
});