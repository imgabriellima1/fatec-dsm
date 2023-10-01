var qtdAcoes;
var valorAcoes;
var taxaCorretagem;
var valorTotal;
var valorTotalOriginal;

valorAcoes = parseFloat(32.87);
qtdAcoes = parseInt(100)
taxaCorretagem = parseFloat(valorAcoes * qtdAcoes) * 0.02
valorTotal = (parseFloat(valorAcoes * qtdAcoes) + taxaCorretagem).toFixed(2)
valorTotalOriginal = valorTotal;

console.log(`Valor Ação: ${valorAcoes}`);
console.log(`Quantidade de ações: ${qtdAcoes}`)
console.log(`Taxa corretagem: ${taxaCorretagem}`)
console.log(`Valor total da negociação: ${valorTotal}`)

valorAcoes = 33.02

// Recalcula taxaCorretagem e valorTotal com o novo valor de valorAcoes
taxaCorretagem = parseFloat(valorAcoes * qtdAcoes) * 0.02;
valorTotal = (parseFloat(valorAcoes * qtdAcoes) + taxaCorretagem).toFixed(2);

console.log(`Valor Ação: ${valorAcoes}`);
console.log(`Quantidade de ações: ${qtdAcoes}`)
console.log(`Taxa corretagem: ${taxaCorretagem}`)
console.log(`Valor total da negociação: ${valorTotal}`)

// Verifica se houve lucro ou não
if (valorTotal > parseFloat(valorTotalOriginal)) {
    console.log("Houve lucro!");
  } else if (valorTotal < parseFloat(valorTotalOriginal)) {
    console.log("Houve prejuízo.");
  } else {
    console.log("Não houve variação no valor total.");
  }


