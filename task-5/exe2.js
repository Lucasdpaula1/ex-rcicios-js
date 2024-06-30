let id = [];
const totalPessoas = Number(
  prompt("digite aqui o total de pessoas que iria fazer essa ficha")
);
const servidores = {};
function resgatar_info(vezesPERCORRIDA) {
  for (let index = 0; index < vezesPERCORRIDA; index++) {
    let nome = prompt("digite seu nome aqui, completo.");

    while (!nome != "") {
      alert("porfavor digite novamente seu nome");
      nome = prompt("digite novamente seu nome");
    }
    nome = nome.toLocaleLowerCase();
    nome = nome.trim();

    let email = prompt("digite seu email,corretamente");
    email = email.trim();
    let index = email.search(/[@]/gi);
    if (index === -1) {
      alert("email, não existente.");
      email = prompt("digite novamente seu email e correto dessa vez");

      index_email = email.search(/[@]/gi);

      while (index_email === -1) {
        email = prompt("digite seu email, novamente");
        index_email = email.search(/[@]/gi);
      }
    }
    let valor_index = email.search(/[@]/);
    email = email.toLocaleLowerCase();

    console.log(valor_index);
    let recortservidor = email.slice(valor_index);
    console.log(recortservidor);
    let quantidade_usuários_gmail = 0;
    let quantidade_usuários_hotmail = 0;
    if ("@gmail.com" === recortservidor) {
      quantidade_usuários_gmail += 1;
      servidores["gmail"] = quantidade_usuários_gmail;
    } else {
      quantidade_usuários_hotmail += 1;
      servidores["hotmail"] = quantidade_usuários_hotmail;
    }
    console.log(servidores);

    let cpf = prompt("digite seu cpf completo");
    const regex = /[\.\-\s]/gi;
    cpf = cpf.replace(regex, "");

    cpf = cpf.trim();

    while (cpf.length != 11) {
      alert("digite seu cpf corretamente, são 11 digitos.");
      cpf = prompt("digite corretamente,agora");
      const regex = /[\.\-\s]/gi;
      cpf = cpf.replace(regex, "");
      cpf = cpf.trim();
    }

    const sexo = prompt("digite sua orientação sexual");
    const re = /[^mf]/gi;

    const estadoCivil = prompt("digite aqui seu estado civiil");
    switch (sexo) {
      case "m":
        console.log("voce é homem");
        break;
      case "f":
        console.log("voc~e é mulher");
        break;
      case sexo.match(re).join(""):
        console.log("parabensm vocé é um et");
    }
    if (sexo === "f" && estadoCivil === "casada") {
      const anos_casdaos = parseInt(prompt("quanto tempo de casada?"));
    }
  }
}
resgatar_info(totalPessoas);
// olá, eu tentei criar um sistema mais dinamico e complexo  de verificação com base na resposta de entrada, usei vários utensilios como metodos, functios, estruturas de rept, estruturas de condições e expressões angulares para me ajudarem nisso. eu poderia ter terminado uma estrutura mais elaborada no switch case, porém n tenho mt tempo para fazer isso. tenho que terminar o resto das atv, sendo que agora ja consta 17:22.
