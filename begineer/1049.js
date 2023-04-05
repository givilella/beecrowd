var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\r\n");

const animal = lines;

const especie = (animal) =>{
    if(animal[0] === 'vertebrado'){
        if(animal[1] === 'ave'){
            if(animal[2] === 'carnivoro'){
                return 'aguia';
            }else{
                return 'pomba';
            }
        }else{
            if(animal[2] === 'onivoro'){
                return 'homem';
            }else{
                return 'vaca';
            }
        }
    }else{
        if(animal[1] === 'inseto'){
            if(animal[2] === 'hematofago'){
                return 'pulga';
            }else{
                return 'lagarta';
            }
        }else{
            if(animal[1] === 'anelideo'){
                if(animal[2] === 'hematofago'){
                    return 'sanguessuga';
                }else{
                    return 'minhoca';
                }               
            }
        }
    }
}

function main(){
    console.log(especie(animal))
}

main()