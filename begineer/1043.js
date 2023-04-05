var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split(" ");

const values = lines.map(num => Number(num));

const areaTrapezio = (a, b, c) => (a + b) * c / 2;

const perimetroTriangulo = (a, b, c) => (a + b + c);

function main(array){
    const [a, b, c] = array.map(num => Number(num)).sort((a, b) => a - b);
    if (c >= (b + a)) {
        let area = areaTrapezio(...array);
        console.log(`Area = ${area.toFixed(1)}`);
    } else {
        let perimetro = perimetroTriangulo(...array);
        console.log(`Perimetro = ${perimetro.toFixed(1)}`);
    }
}

main(values);