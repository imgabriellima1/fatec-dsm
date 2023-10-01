const prompt = require('prompt-sync')();

var nota1 = parseFloat(prompt("Informe a primeira nota: \n"))
var nota2 = parseFloat(prompt("Informe a segunda nota: \n"))
var nota3 = parseFloat(prompt("Informe a terceira nota: \n"))

media = (nota1 + nota2 + nota3) / 3

if(media >= 7){
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}