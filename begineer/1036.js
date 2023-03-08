var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split(" ");

const [a, b, c] = lines.map(num => Number(num))

const delta = (a, b, c) => (Math.pow(b, 2)) - 4 * a * c;

let d = delta(a, b, c)

const x1 = (a, b, d) => -b + Math.sqrt(d) / (2 * a);
const x2 = (a, b, d) => -b - Math.sqrt(d) / (2 * a);

if (d >= 0 || a != 0){
    console.log(x1(a, b, d).toFixed(5))
    console.log(x2(a, b, d).toFixed(5))
} else {
    console.log('Impossivel calcular')
}