const prompt = require('prompt-sync')()

let num = parseInt(prompt("digite o codigo do produto: "));
//Gambiarra talvez?
if ( num >= 10 && num <= 20 ){
 num = 10;
}else if(( num >= 5 && num <= 6)|| ( num >= 25 && num <= 50)){
 num = 5;
}

switch (num) {
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