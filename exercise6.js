const prompt = require('prompt-sync')()
let a = parseInt(prompt('Digite o valor do lado A: '));
let b = parseInt(prompt('Digite o valor do lado B: '));
let c = parseInt(prompt('Digite o valor do lado C: '));

if((a < (b + c)) && (b < (a + c)) && (c < (a + b))){
    if(a === b && a === c){
        console.log("triangulo equilátero!");
    }else if(a === b || b === c || c === a){
        console.log("triangulo isósceles!");
    }else{
        console.log("triangulo escaleno!");
    }
}else{
    console.log("Não é triangulo!");
}
