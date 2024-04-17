const prompt = require('prompt-sync')()
let numInt1 = parseFloat(prompt('Digite a primeira nota: '));
let numInt2 = parseFloat(prompt('Digite a segunda nota: '));

let nota = ((numInt1 + numInt2) / 2); 

if(nota >= 6){
    console.log("PARABÉNS! Você foi aprovado");
}else{
    console.log("Você foi REPROVADO! Estude mais");
}