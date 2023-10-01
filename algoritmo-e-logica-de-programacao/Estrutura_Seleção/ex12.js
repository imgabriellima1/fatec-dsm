const prompt = require('prompt-sync')();

var idade = parseInt(prompt("Por favor, informe a idade: "));

if (idade < 18){
    console.log("Menor de 18 anos")
} else{
    console.log("Maior de 18 anos")
}