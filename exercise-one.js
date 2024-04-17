const prompt = require('prompt-sync')()
let celsius = prompt('Bem vindo ao conversor de temperatura, digite os graus celsius que deseja converter: ');
console.log(`${celsius} graus celsius equivalem a ${celsius * 1.8 + 32} Farenheint`);