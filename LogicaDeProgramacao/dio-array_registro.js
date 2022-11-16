let arrayNumbers = [39, 45, 54, 55];
console.log(arrayNumbers[4]); // undefined
for (let position = 0; position < arrayNumbers.length; position++) {
  console.log(arrayNumbers[position]);
} // 39 45 54 55

let exampleNameMtz = ["Vlk", "Brito", "Test", "Joao", "Wesley", "Maria"];
let exampleNumberMtz = [22, 84, 99, 19, 20, 18];
for (let positionMtz = 0; positionMtz < exampleNameMtz.length; positionMtz++) {
  console.log(exampleNameMtz[positionMtz], "\t", exampleNumberMtz[positionMtz]);
} // result:
// Vlk      22
// Brito    84
// Test     99
// Joao     19
// Wesley   20
// Maria    18

let Register = {
  itemString: "Wesley Brito",
  itemNumber: 1.73,
  itemBoolean: true,
}; // exemplo basico de registro
Register.itemString = "VLK"; // manipulando item
console.log(Register); // registro sem (.) retorna array
// { itemString: 'VLK', itemNumber: 1.73, itemBoolean: true }

