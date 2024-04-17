const prompt = require('prompt-sync')()
let maca = prompt('Digite o numero de maças compradas: ');

if(maca < 12){
    console.log(`Foi pago o total de R$${maca * 0.30}`);
}else{
    console.log(`Foi pago o total de R$${maca * 0.25}`);
}