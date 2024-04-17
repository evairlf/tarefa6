const prompt = require('prompt-sync')()
let num1 = parseInt(prompt('Digite o primeiro numero: '));
let num2 = parseInt(prompt('Digite o segundo numero: '));
let num3 = parseInt(prompt('Digite o terceiro numero: '));
let num4 = parseInt(prompt('Digite o quarto numero: '));
let num5 = parseInt(prompt('Digite o quinto numero: '));

let nums = [num1, num2, num3, num4, num5];

let count = 0;

while (count < 5) {
    console.log('==========');
    for(let i = 0; i<nums[count]; i++){
        console.log(`${i+1} X ${nums[count]} = ${(i+1)*nums[count]}`);
    }
    count++;
}