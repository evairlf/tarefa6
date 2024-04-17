const prompt = require('prompt-sync')()

let numero = prompt("digite um numero inteiro: ");
let count = 0;

while(count < 10){
    console.log(numero);
    count ++;
}