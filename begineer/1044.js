var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split(" ");

const [a, b] = lines.map(num => Number(num));

const ehMult = (a, b) => {
    let result;
    (a % b == 0 || b % a == 0) ? result = 'Sao Multiplos' : result = 'Nao sao Multiplos';
    console.log(result);
};

function main(){
    ehMult(a, b)
}

main();