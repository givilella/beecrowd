var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split(" ");

const lista = lines.map(num => Number(num));

//https://www.section.io/engineering-education/sorting-algorithms-in-js/
function bubbleSort(arr){
    //Outer pass
    for(let i = 0; i < arr.length; i++){
        //Inner pass
        for(let j = 0; j < arr.length - i - 1; j++){
            //Value comparison using ascending order
            if(arr[j + 1] < arr[j]){
                //Swapping
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
        }
    };
    return arr;
};

function main() {
    const listaFinal = [/* ...lista.slice().sort() */...bubbleSort(lista.slice()),'',...lista];
    listaFinal.forEach(a => console.log(a));
};

main();