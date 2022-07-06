/*
Spread Operator (Operador de Expansión)

op Aritméticos -> +, -, /,*
Op Asignación -> =
Op Comparación -> >, <, >=, <=
Op Lógigos -> &&, ||
Op expansión -> ...

*/
//let numbers = [1, 2, 3, 4, 5];

//console.log(...numbers);

/*
Enviar elementos de un array a una función.
*/

/////

/*const addNumbers = (a, b, c) => {
    console.log(a + b + c);
} 

let numbers = [1, 2, 3];

addNumbers(...numbers);
addNumbers(numbers[0], numbers[1], numbers[2]);
*/

/////

/*

Añadir un array a otro array

*/


/*
let pokemones = ['Pikachu', 'Charmander', 'Bulbasaur'];

let newPokemones =['Ditto', 'Snorlax'];

pokemones.push(...newPokemones); 

console.log(pokemones);

/*

/////

/*
Copiar un array
*/
/*
let numbers = [1,2,3,4,5];
let copyNumbers = [...numbers];

console.log(copyNumbers)
*/

/////

/*
Concatenar arrays
*/
/*
let number1 = [1,2,3,4,5];
let numbers2 = [6,7,8,9,10];

let concatNumbers = [...number1, ...numbers2];

console.log(concatNumbers);
*/

/*
Enviar un número indefinido de argumentos a una función (Parámetro REST)
*/
/*
const restParms = (...numbers) => {
    console.log(numbers);
}

restParms(1,2,3,4,5,10,40,60,100);

*/

/////

/*
Libreria math
*/
/*
const numbers = [-14,5,4,10,40];

console.log( Math.max(...numbers) ); //<- Busca el valor mayor 
console.log( Math.min(...numbers) ); //<- Busca el valor menor 

*/

/////
/*

Eliminar elementos duplicados

*/
/* 
const numbers = [-14,5,4,10,40,5,10];

console.log(...new Set(numbers) );
*/