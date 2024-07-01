const numero_aleatório = parseInt(prompt("digite um numero aleatorio"));
function numeroP(numero) {
  let valorimpar;
  for (index = 2; index < numero; index++) {
    let numeroimpar = false;
    let numero2 = numero % index;
    let resto = numero % 2;
    if (numero2 === 0 && resto === 0) {
      console.log("este numero é par");
      break;
    } else {
      numeroimpar = true;
    }
    valorimpar = numeroimpar;
  }

  if (valorimpar) {
    console.log("este numero é impar");
  }
}
numeroP(numero_aleatório);
