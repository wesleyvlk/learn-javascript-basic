let buttonTeste = document.querySelector("._formTeste-buttonTeste");
let inputTeste = document.querySelector("._formTeste-inputTeste");

buttonTeste.addEventListener("click", function ButtonTest(event) {
  Event.preventDefault();
  buttonTeste.style.background = "#ea4d4d";
  buttonTeste.style.color = "#fff";
  console.log(inputTeste.value);
});
