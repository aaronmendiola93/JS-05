/** User profile
 * Write a program that prompts a user for their data: username, age, and a list of their favorite movies. 
 * Store the information and then showcase it in the console. Take note that the output 
 * for the films should add a small message like: 'The film {film} is one of my favorites'.
 * 
 */


const inputName = prompt("¿Como te llamas? ");
const inputAge = prompt("¿Que edad tienes?");
const inputMovies = prompt("Ingresa tu pelicula Favorita");
const inputMovies2 = prompt("Escribe otra pelicula que te guste");
const inputMovies3 = prompt("Escribe una ultima pelicula");
alert(`Hola ${inputName}, tienes ${inputAge} años`);
alert(`Una de tus peliculas favoritas es ${inputMovies}`);
alert(`Una de tus peliculas favoritas es ${inputMovies2}`);
alert(`Una de tus peliculas favoritas es ${inputMovies3}`);




