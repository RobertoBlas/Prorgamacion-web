/* 
Metodos Arrays 2

Son funciones que van a recorrer el arreglo, modificar su comportamiento, nos pueden regresar arrays y se 
usa la nomenclatura del punto '.'
    arreglo.metodo (callback);
Los metodos usarán un 'callback' dentro de los paréntesis.

callback -> es una función que se ejecuta dentro de otra función.
*/

/*
°FROM
.from(iterable)

convierte en array el elemento iterable (recorrer).
*/
//let.word = 'Hola mundo';
//console.log(Array.from(word));

///////

/*
°SORT
.sort()

Organiza los elementos del array de acuerdo a su valor unicode. (orden alfabético)

https://home.unicode.org/

*/

/*
let games = ['Mario Bros', 'Zelda', 'Donkey Kong', 'Street Fighter', 'Amoung us'];

//console.log(games.sort());

let scores = [1000, 800, 234, 10, 400,1];
console.log(scores.sort ( (a,b) => a-b ));
console.log(scores.sort ( (a,b) => b-a ));
*/
/*
    Callback de comparación - Orden Ascendente

    (a - b) < 0 = -1
    (a - b) == 0 = 0
    (a - b) > 0 = 1

    1000 - 800  = 200   = 1
    800  -  234 = 566   = 1
    234  -   10 = 224   = 1
    10   - 4000 = -3990 = -1
    4000 -    1 = 3999  = 1
    1    -    0 = 1     = 1

*/

/////

/*
FOR EACH
.forEach(callback(currentValue, [index]))

Ejecuta la función indicada una vez por cada elemento del array

*/

// let pokemones = ['Pikachu', 'Charmander', 'Boulbasaur', 'Dito', 'Snorlax'];

//pokemones.forEach((pokemon) => console.log (pokemon));

// pokemones.forEach( (pokemon,index) => console.log(${pokemon} esta en la posición ${index}) )

/////

/*
SOME Y EVERY

.some(callback)

comprueba si al menos UNO de los elementos del array cumple con la condición del callback.

.every(callback)

comprueba si TODOS los elementos del array cumplen con la condición.

Resultado será

True -> si cumple
False -> si no cumple

*/

// let words = ['HTML', 'CSS', 'PHP', 'JavaScript', 'Git'];

// console.log(words.some( (word) => word.length == 10));

// console.log(words.every ( (word) => word.length > 2 ) );

/////

/*

MAP

.map(callback)

Transformar todos los elementos del Array y devolver un nuevo array

*/

//let numbers = [1,2,3,4,5];

//let numbersDoble = numbers.map( (number) => number * 2);
//console.log(numbersDoble);

/////

/*

FILTER
.filter(callback) 

Filtra todos los elementos del Array que cumplan con la condición del callback y devuelve un
nuevo Array

*/

//let numbers = [10, 20, 30, 40, 50];

//let numberFilter = numbers.filter((number) => number > 30);

//console.log(numbersFilter)

/////

/*

REDUCE
.reduce(callback)
Reduce todos los elementos del array a un unico valor.

*/

//let numbers = [1,2,3,4,5];

//console.log(numbers.reduce ( (a,b) => a+b));
//console.log(numbers.reduce ( (a,b) => a-b));