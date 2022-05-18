// Definimos nuestro arreglo multidimensional con los datos de los pokemones
var Pokemones = [
    ['Pikachu', 'Eléctrico', 1000],     //indice 0
    ['Charmander', 'Fuego', 900],       //indice 1
    ['Bulbasaur', 'Planta', 800]       //indice 2
    //     0           1      2    
];

//creamos las variables que traeran el ID de HTML

var miImagen = document.getElementById('nombre');
var miNombre = document.getElementById('tipo');
var miPoder = document.getElementById('poder');

var agregar = document.getElementById("agregar");
agregar.addEventListener('click', agregarPokemon);

//Definir la función que va a agregar pokemones al array

function agregarPokemon(){
    //Aquí va nuestro código
}
/* Así agregamos datos a un array con push:
pokemones.push('Pikachu','Eléctrico', 1000); */
/*
Puedo sustituir lo anterior con:
pokemones.push([nombre.value, tipo.value, poder.value]);
}
*/