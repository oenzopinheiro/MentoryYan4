const prompt = require("prompt-sync")();

var codigodovendedor = prompt("Qual o codigo?") //codigo
var nomeVendedor = prompt("Qual o nome do vendedor?") //nome do vendedor
var computadorValor = Number(prompt("Qual valor do computador?")) //valor do computador
var Vendas = Number(prompt("Qual o numero de vendas?")) //numero de vendas
var valorTotal = computadorValor * Vendas //calculo para saber o valor de tudo em dinheiro
var porcentagem = 1 / 100 //porcetagem

var resultadoComicao = (valorTotal * porcentagem) //calculo para saber a comição

console.log(`Codigo: ${codigodovendedor}
Nome do vendedor: ${nomeVendedor}
Preço do computador: $${computadorValor} 
Sua comição: $${resultadoComicao}`); //informações