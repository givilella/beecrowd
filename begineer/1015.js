var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [x1, y1] = lines[0].split(' ').map(num => Number(num));
const [x2, y2] = lines[1].split(' ').map(num => Number(num));

const distance = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

function main(){
    console.log(distance(x1, y1, x2, y2).toFixed(4));
};

main();