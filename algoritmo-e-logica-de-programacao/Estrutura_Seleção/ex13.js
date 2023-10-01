var peso;
var altura;
var imc;
var categoria;

peso = parseFloat(75)
altura = parseFloat(1.85)

imc = (peso / (altura * altura)).toFixed(2)

console.log(`Peso: ${peso}\nAltura: ${altura}\nIMC: ${imc}`)

if (imc < 16.5){
    categoria = "Peso severamente abaixo do normal"
} else if(imc < 18.5){
    categoria = "Peso abaixo do normal"
} else if(imc < 24.99){
    categoria = "Normal"
} else if (imc < 29.99){
    categoria = "Pré-obeso"
} else if (imc < 34.99) {
    categoria = "Obesidade classe I"
} else if (imc < 39.99) {
    categoria = "Obesidade classe II"
} else if (imc > 39.99) {
    categoria = "Obesidade classe III"
}

console.log(`Categoria: ${categoria}`)
