const prompt = require('prompt-sync')();

var salario;
var aliquotaIR;
var salarioLiquido;

salario = parseFloat(prompt("Por favor, informe o salário: "));

if (salario <= 2112){
    aliquotaIR = 0
} else if(salario <= 2826.65){
    aliquotaIR = 0.075
} else if(salario <= 3751.05){
    aliquotaIR = 0.15
} else if(salario <= 4664.68){
    aliquotaIR = 0.225
} else if(salario > 4664.68){
    aliquotaIR = 0.275
}

salarioLiquido = salario - (salario * aliquotaIR);
console.log(`Salário: ${salario}\nAliquota IR: ${aliquotaIR}\nSalário Líquido: ${salarioLiquido}`)
