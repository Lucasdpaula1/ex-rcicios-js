const quantosnumeros = parseInt(
  prompt("digite quantas vezes você quer adicionar um numero")
);
function ordenar(totaldenumero) {
  const arraynumeros = [];
  for (index = 0; index < totaldenumero; index++) {
    let numero1 = parseInt(prompt("digite qualquer numero"));
    arraynumeros.push(numero1);
  }
  // console.log(arraynumeros);
  let numeroemordemcresente = [];
  for (index = 0; index < arraynumeros.length; ) {
    let menorvalor = arraynumeros.reduce((acumulador, valorPrinipal) => {
      return acumulador < valorPrinipal ? acumulador : valorPrinipal;
    }, 10000);
    console.log(menorvalor);
    let arraysemnumero2 = arraynumeros.indexOf(menorvalor);
    let remocção = arraynumeros.splice(arraysemnumero2, 1);
    numeroemordemcresente.push(remocção);
  }

  console.log(numeroemordemcresente);
}
ordenar(quantosnumeros);
//  a magica consistiu no reduce retornando um valor menor e sempre retirando ele do array principal e adicionando primeiro num arry reserva.
