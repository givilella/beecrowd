var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split(" ");

[a, b, c, d] = lines.map(num => parseInt(num))
console.log(`${a} ${b} ${c} ${d}`)
if(b > c && d > a && c + d > a + b && c > 0 && d > 0 && a % 2 === 0){
    console.log('Valores aceitos')
}else{
    console.log('Valores nao aceitos')
}

refazer

