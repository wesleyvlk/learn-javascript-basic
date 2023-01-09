function CalculoNotas(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

let media = CalculoNotas(7, 9);
let resultado = media;
if (resultado >= 6) {
  resultado = "aprovado";
} else {
  resultado = "reprovado";
}

console.log("O resultado é:", resultado, media);
