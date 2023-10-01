const prompt = require('prompt-sync')();

var operacaoMatematica;
var valor1;
var valor2;
var resultado;

operacaoMatematica = prompt("Informe o nº da operação matemática que deseja: 1 - somar, 2 - subtrair, 3 - multiplicar ou 4 - dividir")

valor1 = parseFloat(prompt("Informe o primeiro valor: "))
valor2 = parseFloat(prompt("Informe o segundo valor: "))

if(operacaoMatematica == "1"){
    resultado = valor1 + valor2
} else if(operacaoMatematica == "2"){
    resultado = valor1 - valor2
} else if(operacaoMatematica == "3"){
    resultado = valor1 * valor2
} else if(operacaoMatematica == "4"){
    resultado = valor1 / valor2
} else {
    resultado = "Operação não identidicada"
}

console.log(`Resultado: ${resultado}`)