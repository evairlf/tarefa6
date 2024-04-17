const prompt = require('prompt-sync')()

for(let numero = 1000 ; numero<=1990 ; numero++){
    if((numero*11)%5===0){
        console.log(numero);
    }
}