/** ----- Highest number-----
 * Write a program that asks for 10 numbers. Using logical operators 
 * and any other javascript functions/structures you've seen before, 
 * determine and output the highest of those numbers.
 */

let numList=[];
for (var i = 0; i < 10; i++) {
    var numero = parseInt(prompt("Ingresa un número:"));
    numList.push(numero);
}

var numeroMayor = numList[0]; 
for (var i = 1; i < numList.length; i++) {
  if (numList[i] >numeroMayor) {
    numeroMayor = numList[i]; 
  }
}

alert("El número más grande es: " + numeroMayor);