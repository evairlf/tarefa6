const prompt = require('prompt-sync')()
let numInt2 = prompt('Digite a primeira nota: ');
let numInt1 = prompt('Digite a segunda nota: ');

let nota = ((numInt1 + numInt2) / 2); 

if(nota >= 6){
    console.log("PARABÉNS! Você foi aprovado");
}else{
    console.log("Você foi REPROVADO! Estude mais");
}