const prompt = require('prompt-sync')()
let numInt1 = prompt('Digita um numero inteiro:');
let numInt2 = prompt('Digita um numero inteiro:');
let numInt3 = prompt('Digita um numero inteiro:');
let numInt4 = parseInt(numInt1) + parseInt(numInt2) + parseInt(numInt3);

numInt1 = parseInt(numInt1);

console.log(`RESULTADO: 
    ${numInt1 + 25},
    ${numInt2 * 3 },
    ${numInt3 * 0.12},
    ${numInt4}`);