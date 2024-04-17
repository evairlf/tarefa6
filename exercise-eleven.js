const prompt = require('prompt-sync')()

let numero = prompt('Digite um número inteiro: ');

while (numero !== null && numero > 0) {
    if(numero %2==0){
        console.log("PAR");
    }else{
        console.log("IMPAR");
    }
    numero = prompt('Digite um número inteiro: ');
}
console.log("Numero inválido algoritmo encerrado");