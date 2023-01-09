let nomeUsuario = "Wesley VLK";
let idadeUsuario = 22;
let pesoUsuario = 84;
let pesoDesejado = 74;
let vezesMalhou = 0;

while (pesoUsuario > pesoDesejado) {
  pesoUsuario = Malhar(idadeUsuario, pesoUsuario);
  vezesMalhou++;
}

console.log(
  nomeUsuario,
  "você precisa malhar:",
  vezesMalhou,
  "meses, para chegar ao peso desejado:",
  pesoDesejado
);

function Malhar(idade, peso) {
  if (idade < 28) {
    return peso - 2;
  }

  return peso - 1;
}
