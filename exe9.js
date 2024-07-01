let altura = prompt(
  "digite aqui a sua altura, pode ser tatno em metros ou centimetros"
);
const rengex = /[,\s:]/gi;
altura = altura.replace(rengex, "");
altura = parseInt(altura);

let verifiação = false;
let sexualidaefemia;
sexualidade2 = prompt("coloque aqui sua sexualidade");
sexualidade2 = sexualidade2.toLocaleLowerCase();
while (!verifiação) {
  if (sexualidade2 === "f" || sexualidade2 === "m") {
    verifiação = true;
  } else {
    verifiação;
  }
}
