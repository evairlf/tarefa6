const prompt = require('prompt-sync')()
let numInt2 = parseFloat(prompt('Digite a primeira nota: '));
let numInt1 = parseFloat(prompt('Digite a segunda nota: '));

let nota = ((numInt1 + numInt2) / 2); 
console.log(nota);
if(nota >= 6){
    console.log("PARABÉNS! Você foi aprovado");
}