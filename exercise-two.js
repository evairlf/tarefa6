const prompt = require('prompt-sync')()
let eleitores = prompt('Digite o numero de eleitores: ');
let VotosBrancos = prompt('Digite o numero de votos em branco: ');
let votosNulos = prompt('Digite o numero de votos nulos:');
let votosValidos = prompt('Digite os votos validos:');


console.log(`A quantidade de eleitores é ${eleitores} e as respectivas porcentagens são:
 Votos em Branco: ${(VotosBrancos/eleitores)*100}% 
 Votos Nulos: ${(votosNulos/eleitores)*100}%
 Votos Validos: ${(votosValidos/eleitores)*100}%`);