var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

const notas = [365, 30, 1]
const dict = ['ano(s)','mes(es)','dia(s)']

notas.forEach((a, b) => {
    let qtde = Math.trunc(lines / a);
    lines -= qtde * a 
    console.log(`${qtde} ${dict[b]}`)
});