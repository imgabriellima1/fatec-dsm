const prompt = require('prompt-sync')();

var usuario = prompt("Informe o usuário: ")
var senha = prompt("Agora, informe a senha: ")

if (usuario == "financeiro" && senha == "303010"){
    console.log("ACESSO LIBERADO")
} else {
    console.log("ACESSO NEGADO")
}