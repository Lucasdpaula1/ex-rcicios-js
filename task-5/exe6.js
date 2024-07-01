let a = 10 + (5 * 2) / 2 < 10;
let b = 20 + (10 * 2) / 4 > 20;
console.log(a);
if (a === false && b === false) {
  console.log("ambos são falsos");
} else if (a === true && b === true) {
  console.log("ambos são verdadeiros");
} else {
  console.log("um dos dois é verdadeiro ou falso");
}
