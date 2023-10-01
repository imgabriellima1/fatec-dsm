const prompt = require('prompt-sync')();

var placaDoCarro = prompt("Informe a placa do carro: ")

ultimoDigitoPlaca = placaDoCarro.charAt(placaDoCarro.length - 1);

var diaRodizio;

if (ultimoDigitoPlaca == '1' || ultimoDigitoPlaca == '2'){
    diaRodizio = "Segunda-Feira"
} else if(ultimoDigitoPlaca == '3' || ultimoDigitoPlaca == '4'){
    diaRodizio = "Terça-Feira"
} else if(ultimoDigitoPlaca == '5' || ultimoDigitoPlaca == '6'){
    diaRodizio = "Quarta-Feira"
} else if(ultimoDigitoPlaca == '7' || ultimoDigitoPlaca == '8'){
    diaRodizio = "Quinta-feira"
} else if(ultimoDigitoPlaca == '9' || ultimoDigitoPlaca == '0'){
    diaRodizio = "Sexta-feira"
} else{
    diaRodizio = "Ultimo digito não é um número"
}

console.log(`Dia do rodizio do veículo: ${diaRodizio}`)