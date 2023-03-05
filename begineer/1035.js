var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split(" ");

[a, b, c, d] = lines.map(num => parseInt(num))

if(b > c && d > a && (c + d) > (a + b) && (c && d) > 0){
    console.log('Valores aceitos')
}else{
    console.log('Valores nao aceitos')
}

/* b > c && d > a && (c + d) > (a + b) && (c && d) > 0 ? resp = '' : resp = 'nao ';
console.log(`Valores ${resp}aceitos`) */