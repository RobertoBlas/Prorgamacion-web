/* 
Bucles For Of y For In

Son dos ciclos determinados ES6. Simplifican el bulce 'for'
tradicional

For Tradicional:
    for(i=0; i < 3; i++){
        //Código se ejecuta
    }
Estos nuevos ciclos permiten recorrer estructuras de datos como los 
arrays y objetos

For Of:
    for(variable of Estructura){
        //Código que se ejecuta
    }
For In
    for(variable of Estructura){
        //Código que se ejecuta
    }

-La variable toma el siguiente valor de la estructura en cada interación
-No es necesario especificar el número de iteraciones o vueltas
-El bucle se incrementa solo
-El bucle se detiene automáticamente

*/
// Estructura de datos -> Array

let pokemones = ['Pikachu', 'Charmander', 'Snorlax', 'Ditto'];


// Ciclo For Tradicional
/*
for (i=0; i<3; i++){
    console.log(pokemones[i]);
}
*/

//ciclo For Of
for(let nombre of pokemones){
    console.log(nombre); //Valor de cada posición de la estructura.
}

//Ciclo For In
for(let numero in pokemones){
    console.log(numero); //El indice (Index) de los valores de la estructura.
}
