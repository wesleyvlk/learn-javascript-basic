function CalcularProvas(prova1, prova2, prova3, prova4) {
  return (prova1 + prova2 + prova3 + prova4) / 4;
}

let mediaProvas = CalcularProvas(8, 7, 5, 10);
let resultadoProvas = mediaProvas;
if (resultadoProvas >= 6) {
  resultadoProvas = "Aprovado";
} else {
  resultadoProvas = "Reprovado";
}

console.log(mediaProvas, resultadoProvas);

function multiply(a, b) {
  return a * b;
}

let calcResult = multiply(2, 2);

console.log("The result:", calcResult);
