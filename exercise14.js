const prompt = require('prompt-sync')()

let numero = prompt('Digite um numero decimal ou digite 0 para que a média seja calculada:');
let media = 0;
let count = 0;

while (numero != 0) {
    media += parseFloat(numero);
    count++;
    numero = prompt('Digite um numero decimal ou digite 0 para que a média seja calculada:');
}
console.log(`Média Aritimética: ${parseFloat(media/count)}`);