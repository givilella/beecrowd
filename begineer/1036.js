var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split(" ");

const [a, b, c] = lines.map(num => Number(num));

const delta = (a, b, c) => (Math.pow(b, 2)) - 4 * a * c;
const x1 = (a, b, d) => (-b + Math.sqrt(d)) / (2 * a);
const x2 = (a, b, d) => (-b - Math.sqrt(d)) / (2 * a);

function main() {
    
    let d = delta(a, b, c);
    
    if (d > 0 && a != 0){
        console.log(`R1 = ${x1(a, b, d).toFixed(5)}`);
        console.log(`R1 = ${x2(a, b, d).toFixed(5)}`);
    } else {
        console.log('Impossivel calcular');
    }
}

main();