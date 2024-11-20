let peso = prompt("Qual o seu peso?");
let altura = prompt("Qual a sua altura?");

let imc = peso / (altura * altura);

console.log(imc);
document.body.innerHTML = `<h1>seu imc é ${imc}</h1>`;



