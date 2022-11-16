// concatenação
// let product = "camisa";
// let preco = 15;
// console.log("O preço de", product, "é R$", preco);
// let result = (20 + 5) * 2;
// console.log(result);
// prioridades
// 1. multiplicação
// 2. divisão
// 3. soma
// 4. subtração
// () prioridade extrema
// let x = 10;
// let incrementar = ++x;
// let decrementar = --x;
// console.log(incrementar, decrementar);
// let x = 10
// let y = 3
// x += y
// x -= y
// x *= y
// x /= y
// x %= y
// console.log(x)
let IfSwitchTrafficLight = "teste";

let messageIf = "";
let messageSwitch = "";

if (IfSwitchTrafficLight == "verde") {
  messageIf = "Pode passar";
} else if (IfSwitchTrafficLight == "amarelo") {
  messageIf = "Atenção";
} else if (IfSwitchTrafficLight == "vermelho") {
  messageIf = "Pare";
} else {
  messageIf = "Valor invalido";
}

switch (IfSwitchTrafficLight) {
  case "verde":
    messageSwitch = "Pode passar";
    break;
  case "amarelo":
    messageSwitch = "Atenção";
    break;
  case "vermelho":
    messageSwitch = "Pare";
    break;
  default:
    messageSwitch = "Valor invalido";
    break;
}

console.log(messageIf, messageSwitch);
