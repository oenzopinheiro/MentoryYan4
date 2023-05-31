const prompt = require("prompt-sync")();

var clientCode = prompt('Qual o código do cliente? ');
var clientName = prompt('Qual o nome do cliente? ');
var clientDate = prompt('Qual a data de nascimento do cliente? ');

var calInYears = 2023 - Number(clientDate) ;
var calInDays = calInYears * 365

console.log(
    `O nome do cliente é ${clientName} e sua idade em dias é ${calInDays}`
    );