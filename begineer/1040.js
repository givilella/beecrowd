var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

const notas = lines[0].split(' ').map(num => Number(num));
const notaExame = Number(lines[1]);
const pesos = [2, 3, 4, 1];

const calcNota = (nota, peso) => {
    return (nota.reduce((acc, curr, i) => {
        return acc + curr * peso[i]},0)) / 10;
};

const exame = (media, exame) => {
    const notaFinal = (media + exame) / 2;
    console.log(`Nota do exame: ${exame.toFixed(1)}`);
    if (notaFinal >= 5){
        console.log('Aluno aprovado.');
    } 
    else{
        console.log('Aluno reprovado.');
    }
    console.log(`Media final: ${notaFinal.toFixed(1)}`);   
};

function main(){
    const media = calcNota(notas, pesos);
    console.log(`Media: ${media.toFixed(1)}`);
    
    if (media >= 7) {
        console.log('Aluno aprovado.');
    } else if (media < 5) {
        console.log('Aluno reprovado.');
    } else {
        console.log('Aluno em exame.');
        exame(media, notaExame);
    }   
}
main();