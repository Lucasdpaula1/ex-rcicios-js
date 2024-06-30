//  exercicio 1
let meses = [
  "janeiro",
  "feveiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];
const metaAnual = Math.floor(Math.random() * 1000);

let ano2019 = {};
let ano2021 = {};
let ano2022 = {};

function calcularvendas(meses) {
  for (let index = 0; index < meses.length; index++) {
    while (Object.keys(ano2019).length < 3) {
      let numero_aleatório = Math.floor(Math.random() * 1000);
      ano2019[meses.splice(index, 1)] = numero_aleatório;
    }

    while (Object.keys(ano2021).length < 3) {
      let numero_aleatório = Math.floor(Math.random() * 1000);
      ano2021[meses.splice(index, 1)] = numero_aleatório;
    }

    while (Object.keys(ano2022).length < 6) {
      let numero_aleatório = Math.floor(Math.random() * 1000);
      ano2022[meses.splice(index, 1)] = numero_aleatório;
    }
  }
}
calcularvendas(meses);
let valores2019 = Object.values(ano2019);
let valores2021 = Object.values(ano2021);
console.log(ano2022);
const soma_vendas_anos = valores2019.concat(valores2021);
let percent_tudo = {};

function calcularpercentual() {
  let soma_total = soma_vendas_anos.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
  }, 0);
  const soma_ano_2022 = Object.values(ano2022).reduce(
    (acumulador, valorAtual) => {
      return acumulador + valorAtual;
    }
  );

  console.log(soma_ano_2022);
  console.log(soma_total);
  const percentual1 = soma_total / metaAnual - 1;
  percent_tudo["ano219+2021"] = percentual1;

  const percent2 = soma_ano_2022 / metaAnual - 1;
  percent_tudo["ano2022"] = percent2;

  let diferençapercent =
    ((soma_total - soma_ano_2022) / ((soma_total + soma_ano_2022) / 2)) * 100;
  console.log(diferençapercent);

  return diferençapercent;
}

let percentual = calcularpercentual();
if (percentual < 0) {
  console.log(
    "infelizmente, as venda dos trimestres dos anos de 2019 e 2021 foram menores que o semetre de 2022 ficando um decrescimno de " +
      percentual.toFixed(2)
  );
}
console.log(percent_tudo);
//  nesse exercicio eu quis demonstrar uma diferença de perentual entre a soma de dois anos "2019 e 2021" pelo perentual de 2022 , ambos tiveram um ponto de referncia que nesse caso foi a meta. caso a soma dos dois valores no qual iriei chegar num percentual se esse fosse menor que o ano de 2021 eu printaria na tela.
