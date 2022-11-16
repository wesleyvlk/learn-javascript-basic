let text = "Hello Cataline";
let objectString = text.split(" ");

console.log("Objeto transformado em array:", objectString);
console.log("Texto original, inalterado:", text);

let array = ["Tigas", "Wesley", "Svarog"];
let index = array.indexOf("Tigas");
array.push("Sand");
array.splice(index, 1);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

let person = {
  name: "Wesley Brito",
  height: 84.5,
};
let age = {
  birthDate: "20/04/2000",
  age: 22,
};
let DataFull = Object.assign(person, age);
DataFull.name = "Wesley Brito VLK";

console.log(DataFull);
