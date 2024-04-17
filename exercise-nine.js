const prompt = require('prompt-sync')()

let numero = prompt("digite o codigo do produto: ");
//Gambiarra talvez?
if(numero >= 10 && numero <= 20 ){
    numero = 10;
}else if((numero >= 5 && numero <= 6)||(numero >= 25 && numero <= 50)){
    numero = 5;
}

switch (parseInt(numero)) {
    case 1:
         console.log("produto pertencente a regiao SUL ");
        break;
    case 2:
         console.log("produto pertencente a regiao NORTE ");
        break;
    case 3:
         console.log("produto pertencente a regiao LESTE");
        break;
    case 4:
         console.log("produto pertencente a regiao OESTE");
        break;
    case 5:
        console.log("produto pertencente a regiao NORDESTE");
        break;
    case 7:
    case 8:
    case 9:
         console.log("produto pertencente a regiao  SUDESTE");
        break;
    case 10:
         console.log("produto pertencente a regiao CENTRO-OESTE");
        break;
  
    default:
        console.log('Fora dos Intervalos - Produto Importado');
        break;
}