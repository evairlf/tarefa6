const prompt = require('prompt-sync')()
let valor1 = prompt('Digite o primeiro valor: ');
let valor2 = prompt('Digite o segundo valor: ');

while(valor1 === valor2){
    console.log("Digite valores diferentes!");
    let valor1 = prompt('Digite o primeiro valor: ');
    let valor2 = prompt('Digite o segundo valor: ');
}

(valor1 < valor2) ? console.log(valor1 , valor2) : console.log(valor2 , valor1);