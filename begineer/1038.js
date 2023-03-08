var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split(" ");

function main()  {
    const comidas = [
        {'id':'1','name':'Cachorro Quente','price':'4.0'},
        {'id':'2','name':'X-Salada','price':'4.5'},
        {'id':'3','name':'X-Bacon','price':'5.0'},
        {'id':'4','name':'Torrada simples','price':'2.0'},
        {'id':'5','name':'Refrigerante','price':'1.5'}
    ];
    
    const comidaSelecionada = comidas.find((comida) => comida.id === lines[0]);
    const preco = comidaSelecionada.price * lines[1];
    
    console.log(`Total: R$ ${preco.toFixed(2)}`)
}

main();