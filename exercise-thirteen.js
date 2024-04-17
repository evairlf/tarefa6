const prompt = require('prompt-sync')()
let num1 = parseInt(prompt('Digite o primeiro numero: '));
let num2 = parseInt(prompt('Digite o segundo numero: '));
let num3 = parseInt(prompt('Digite o terceiro numero: '));
let num4 = parseInt(prompt('Digite o quarto numero: '));
let num5 = parseInt(prompt('Digite o quinto numero: '));

let fusca = [num1, num2, num3, num4, num5];

fusca.forEach(element => {
for(let i = 1; 1<= element; i++){
    console.log(`${i} X ${element} = ${i*element}`);
}    
});
