var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split(" ");

const hours = lines.map(num => Number(num));

function main(a, b, c = 24){
    if (b > a) c = 0
    console.log(`O JOGO DUROU ${c - (a - b)} HORA(S)`)
}

main(...hours);