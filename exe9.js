let altura = prompt(
  "digite aqui a sua altura, pode ser tatno em metros ou centimetros"
);
const rengex = /[,\s:]/gi;
altura = altura.replace(rengex, "");
altura = parseInt(altura);

let verifiação = false;
let sexualidaefemia;
let sexualidademasculina;
while (!verifiação) {
  sexualidade2 = prompt("coloque aqui sua sexualidade");
  sexualidade2 = sexualidade2.toLocaleLowerCase();
  if (sexualidade2 === "f" || sexualidade2 === "m") {
    verifiação = true;
    if (sexualidade2 === "f") {
      sexualidaefemia = sexualidade2;
    } else {
      sexualidademasculina = sexualidade2;
    }
  } else {
    verifiação;
  }
}
if (sexualidaefemia) {
  const pesoidealfeminino = 61.1 * altura - 44.7;
  console.log(pesoidealfeminino);
} else {
  //  coloca o resto.
  console.log("resto");
}
