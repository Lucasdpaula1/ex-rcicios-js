let itemsCompradosAdicionais;
let valorItemCompradoAdicionais;
let itenscomprado = [];
let valorcomprados = [];
let todos_produtos = {};
let lista_produto = [
  { nome: "controle remoto", valor: 1000 },
  { nome: "airpod ", valor: 1100 },
  { nome: "pc gamer", valor: 3250 },
  { nome: "notebook asus", valor: 1500 },
  { nome: "notebook lenovo", valor: 2500 },
];
let totaisDeProdutos = parseInt(
  prompt("digite aqui o total de itens na qual vc quer levar pro carrinho")
);

function valoraddicional() {
  let verificação = false;

  while (!verificação) {
    itemadd = prompt(
      "digite aqui sim para adicionar ou não para passar direto"
    );
    itemadd = itemadd.toLocaleLowerCase();
    if (itemadd === "sim" || itemadd === "não") {
      itemadd === "sim" ? (itemadd = true) : (itemadd = false);
      verificação = true;
    } else {
      alert(
        "digite um valor valido, somente sim ou não. sim para prosseguir com a adição de elementos e não para cancelar isto"
      );
    }
  }
  if (itemadd) {
    itemsCompradosAdicionais = [];
    valorItemCompradoAdicionais = [];
    const acesssórios = [
      { nome: "kit teclado gamer fortrek rainbwo", valor: 89.9 },
      { nome: "mouse pad grand gamer", valor: 85.0 },
      { nome: "kit gamer completo", valor: 35.63 },
      { nome: "cadeira gamer", valor: 329.9 },
      { nome: "hub hdmi", valor: 90 },
    ];
    let quantositens = parseInt(
      prompt(
        "digite quantos itens quer adicionar ao carrinho referente a itens do acessório?"
      )
    );
    for (let i = 0; i < quantositens; i++) {
      let prdouto_adicional = prompt(
        "digite um numero de 0 a 4 respecitvamente para o item desejado"
      );
      const regex = /[0-4]/gi;
      let corte = prdouto_adicional.slice(0, 1);
      console.log(corte);

      let indice = corte.search(regex);
      console.log(indice);

      while (indice === -1) {
        alert("coloque um numero valido");
        prdouto_adicional = prompt(
          "digite um numero de 0 a 4 respecitvamente para o item desejado"
        );
        corte = prdouto_adicional.slice(0, 1);
        indice = corte.search(regex);
      }
      let position = parseInt(corte);

      itemsCompradosAdicionais.push(acesssórios[position].nome);
      valorItemCompradoAdicionais.push(acesssórios[position].valor);
    }
  }
}
function pagamento() {
  for (let i = 0; i < totaisDeProdutos; i++) {
    let escolhaCliente = prompt(
      "digite aqui o numero de 0 a 4 referente a lista de produtos"
    );
    const regex = /[0-4]/gi;
    let corte = escolhaCliente.slice(0, 1);
    console.log(corte);

    let indice = corte.search(regex);
    console.log(indice);

    while (indice === -1) {
      alert("coloque um numero valido");
      escolhaCliente = prompt(
        "digite um numero de 0 a 4 respecitvamente para o item desejado"
      );
      corte = escolhaCliente.slice(0, 1);
      indice = corte.search(regex);
    }
    let position = parseInt(corte);

    itenscomprado.push(lista_produto[position].nome);
    valorcomprados.push(lista_produto[position].valor);
  }
  if (
    valorItemCompradoAdicionais === undefined &&
    itemsCompradosAdicionais === undefined
  ) {
    let soma = valorcomprados.reduce((acumulador, valorAtual) => {
      return acumulador + valorAtual;
    });
    todos_produtos["produtos"] = itenscomprado;
    todos_produtos["valor"] = soma;
    let proposta = prompt(
      `o valor esta saindo por ${soma}, como o sr(a) deseja realizar o pagamento? temos 4 formas`
    );
    switch (proposta) {
      case "1":
        alert(
          `você ganhou um desconto de 10% por escolher um pagamento a vista o valor a ser pago seria ${soma} com a redução de 10% passa a ser ${
            soma * 0.9
          }`
        );
        break;
      case "2":
        alert(
          "parabens vc recebu um desconto de 15% o valor esta saindo por " +
            soma * 0.85
        );
        break;
      case "3":
        alert("o valor continua o mesmo a ser pago");
        break;
      case "4":
        alert(
          `voce vai pagar um juros de 10%, o valor total ficara ein ${
            soma * 1.1
          }`
        );
    }
  } else {
    let novoarray = itenscomprado.concat(itemsCompradosAdicionais);
    console.log(itenscomprado);
    let velhoarray = valorcomprados.concat(valorItemCompradoAdicionais);
    let soma = velhoarray.reduce((acumulador, valoratual) => {
      return acumulador + valoratual;
    });
    todos_produtos["produto"] = novoarray;
    todos_produtos["valor"] = velhoarray;
    let proposta = prompt(
      `o valor esta saindo por ${soma}, como o sr(a) deseja realizar o pagamento? temos 4 formas`
    );
    switch (proposta) {
      case "1":
        alert(
          `você ganhou um desconto de 10% por escolher um pagamento a vista o valor a ser pago seria ${soma} com a redução de 10% passa a ser ${
            soma * 0.9
          }`
        );
        break;
      case "2":
        alert(
          "parabens vc recebu um desconto de 15% o valor esta saindo por " +
            soma * 0.85
        );
        break;
      case "3":
        alert("o valor continua o mesmo a ser pago");
        break;
      case "4":
        alert(
          `voce vai pagar um juros de 10%, o valor total ficara ein ${
            soma * 1.1
          }`
        );
    }
  }
}

valoraddicional();

pagamento();
console.log(todos_produtos);
// bem, nesse exercicio eu quis deixr ele mais amplo no quesito de personalização de produto. caso o usuário queira um elemento adicional para seu setup gamer, aonde esse valor seria implicado na soma final do produto. tudo dependente de um sistema de condição na qual recebe um valor de entrada e faz uma formatação desse valor. tendo assim um sistema mais dinamico para um publico alvo de é amante de jogos, pois quando se compra um notebook ou algo semelhante sempre iram comprar um mouse pad, um teclado maneiro dentre outros utensilios que iram auxiliar na sua jogatina.
