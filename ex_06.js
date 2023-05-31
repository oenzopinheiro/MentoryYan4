const prompt = require("prompt-sync")();

var cotacaoDolar = 5.25;

var dolar = prompt("Escreva aqui em valor do dolar: ");

var real = dolar * cotacaoDolar;

console.log(`O valor do dolar convertido para o real é ${real}`);