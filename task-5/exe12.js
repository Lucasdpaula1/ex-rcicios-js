let nota1 = parseFloat(prompt("digite sua nota que equivale ao peso 1"));
let nota2 = parseFloat(prompt("digite sua nota que equival ao peso 2"));
let peso3 = parseFloat(prompt("digite sua nota que equivale ao peso 3"));
let atv = parseFloat(prompt("digite a média de sua nota de atividades aqui"));
function notaAluno(nota1, nota2, nota3, mediaatv) {
  let multtriplo = nota3 * 3;
  let multduplo = nota2 * 2;
  console.log(`eu sou a multipliação do peso2 ${multduplo}`);
  console.log(`ja eu sou a multiplciação do peso3 ${multtriplo}`);
  console.log(nota1);
  console.log(mediaatv);
  let media = (nota1 + multtriplo + multduplo + mediaatv) / 7;

  return media;
}
let notafinal = notaAluno(nota1, nota2, peso3, atv);
console.log(notafinal);
if (notafinal >= 9.0) {
  console.log(
    `continue assim, vc sera o exemplo da classe . tirou um A com a media equivalente ${notafinal}`
  );
  alert(
    `continue assim, vc sera o exemplo da classe . tirou um A com a media equivalente ${notafinal}`
  );
} else if (notafinal >= 7.5) {
  console.log(
    `nada mal, porém continue se esforçando para bater seus objetivos. tirou nota equivalente a B ${notafinal}`
  );
  alert(
    `nada mal, porém continue se esforçando para bater seus objetivos. tirou nota equivalente a B ${notafinal}`
  );
} else if (notafinal >= 6.0) {
  console.log(
    `ta precisanndo melhorar porém não perca as esperanças ainda, tirou um C ${notafinal}`
  );
  alert(
    `ta precisanndo melhorar porém não perca as esperanças ainda, tirou um C ${notafinal}`
  );
} else if (notafinal >= 4.0) {
  console.log(
    `eu no seu caso ja estava sem coro pois minha mãe ja tinha me batido umas 50vezes antes de vim pra escola, vc ticou com um D ${notafinal}`
  );
  alert(
    `eu no seu caso ja estava sem coro pois minha mãe ja tinha me batido umas 50vezes antes de vim pra escola, vc ticou com um D ${notafinal}`
  );
} else {
  console.log(
    `nem sei se vc passa mais de ano, so se fizer a gloriosa kkkkkk porém não tem como piorar sua nota é um E ${notafinal}`
  );
  alert(
    `nem sei se vc passa mais de ano, so se fizer a gloriosa kkkkkk porém não tem como piorar sua nota é um E ${notafinal}`
  );
  // alert("o erro esta aqui");
}
