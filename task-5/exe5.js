let dobro = 2;
let trplo = 3;
let numero = parseInt(prompt("pode colocar numero positivo ou negativo"));
if (numero < 0) {
  numero *= trplo;
} else {
  numero *= dobro;
}
console.log(numero);
