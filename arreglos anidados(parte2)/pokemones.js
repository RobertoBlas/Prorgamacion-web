// Definimos nuestro arreglo multidimensional con los datos de los pokemones
var pokemones = [];

//creamos las variables que traeran el ID de HTML

var miNombre = document.getElementById('nombre');
var miTipo = document.getElementById('tipo');
var miPoder = document.getElementById('poder');
var mensaje = document.getElementById('mensaje');

var agregar = document.getElementById("agregar");
agregar.addEventListener('click', agregarPokemon);

var mostrar = document.getElementById("mostrar");
mostrar.addEventListener('click', mostrarPokemones);

//Definir la función que va a agregar pokemones al array

function agregarPokemon(){
    //Aquí va nuestro código
/* Así agregamos datos a un array con push:
pokemones.push('Pikachu','Eléctrico', 1000); */
//Puedo sustituir lo anterior con:
pokemones.push([nombre.value, tipo.value, poder.value]);

var i = pokemones.length - 1;
//Imprimimos el mensaje en la etiqueta p id mensaje 
mensaje.innerHTML = 'Se agrego ' + pokemones[i][0]; 
}

//Definimos la funcion que va a mostrar todos los datos del array

function mostrarPokemones(){
    //codigo a ejecutar
    document.write(
    '<ul>' + 
    '<li><img src="imagenes/' + pokemones[0][0] + '.png" alt ="Imagen Pokemon"><li>' +
    '<li class="item">Pokemon: ' + pokemones[0][0] + '</li>' +
    '<li>Tipo: ' + pokemones [0][1] + '</li>' +
    '<li>Poder: ' + pokemones [0][2] + '</li>' +
    '</ul>'
    );
}