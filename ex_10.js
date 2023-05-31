const prompt = require("prompt-sync")();

var F = Number(prompt("Quantos grau F?"))
var convertido = (F - 32) / 1.8

console.log(
    `Valor convertido de F para C é ${convertido}`
);