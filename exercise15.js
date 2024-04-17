const prompt = require('prompt-sync')()

let numero = prompt('Digite um numero decimal ou digite 0 para que a média seja calculada:');
let peso = prompt('Digite um numero decimal ou digite 0 para que a média seja calculada:');
let medias = 0;
let pesos = 0;

while (numero != 0) {
    medias += (numero*peso);
    pesos += parseFloat(peso);
    numero = prompt('Digite um numero decimal ou digite 0 para que a média seja calculada:');
    peso = prompt('Digite um numero decimal ou digite 0 para que a média seja calculada:');
}
let mediaPonderada =  parseFloat(medias/pesos).toFixed(2);
console.log(`Média Aritimética Ponderada: ${mediaPonderada}`);



//media ponderada dos valores com seus pesos respectivos mP = (v1.rP + v2.rP + .... + vN.rP)/rP¹+rP²+...+pN
// valor1 multiplicado pelo seu respectivo peso + valor2 multiplicado pelo seu respectivo peso tudo isso dividido pelos pesos somados