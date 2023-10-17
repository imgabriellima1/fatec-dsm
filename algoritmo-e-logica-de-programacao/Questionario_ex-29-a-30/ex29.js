const prompt = require('prompt-sync')();

var b = prompt("Por favor, informar o valor de a:");
var a = prompt("Por favor, informar o valor de b:");
var c = prompt("Por favor, informar o valor de c:");
var mens = 0;

if((a < b+c) && (b < a+c) && (c < a + b)){
    if(a == b && b == c){
        mens = "Triângulo Equilátero";
    } else {
        if(a == b || b == c || a == c){
            mens = "Triângulo Isósceles";
        } else {
            mens = "Triângulo Escaleno"
        }
    }
} else {
    mens = "Não é possível formar um triângulo"
}

console.log(mens);