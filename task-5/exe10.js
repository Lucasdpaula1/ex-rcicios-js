let altura = prompt(
  "digite aqui a sua altura, pode ser tatno em metros ou centimetros"
);
const rengex = /[,\s:]/gi;
altura = altura.replace(rengex, "");
altura = parseInt(altura);
let kilos = parseInt(prompt("coloque aqui os eu peso"));
let sexo = parseInt(prompt("digite aqui sua orientação sexual"));
let sexualidae = "";
let idade = parseInt(prompt("coloue aqui a sua idade"));

while (sexo > 3) {
  sexo = parseInt(prompt("digite 1 para mcho, 2 para femia e 3 para n dizer"));
}
switch (sexo) {
  case 1:
    sexualidae = "macho";
    break;
  case 2:
    sexualidae = "femia";
    break;
  case 3:
    sexualidae = "prefiro não dizer";
    break;
}

console.log(sexualidae);
const pesoideal1 = kilos / ((altura * altura) / 10000);
console.log(pesoideal1);

function tabela(peso) {
  if (peso < 18.5) {
    console.log("abaixo do peso");
  } else if (18.5 < peso && peso < 25) {
    console.log("peso normal");
  } else if (25 <= peso && peso < 30) {
    console.log("acima do peso");
  } else {
    console.log("obeso");
  }
}

tabela(pesoideal1);
