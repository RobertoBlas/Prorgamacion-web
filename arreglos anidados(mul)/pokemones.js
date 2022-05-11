// Definimos nuestro arreglo multidimensional con los datos de los pokemones
var Pokemones = [
    ['Pikachu', 'Eléctrico', 1000],     //indice 0
    ['Charmander', 'Fuego', 900],       //indice 1
    ['Bulbasaur', 'Planta', 800]       //indice 2
    //     0           1      2    
];

//creamos las variables que traeran el ID de HTML

var miImagen = document.getElementById('imagen');
var miNombre = document.getElementById('nombre');
var miTipo = document.getElementById('tipo');
var miPoder = document.getElementById('poder');
var numero = prompt("Elige un numero del 0 al 2");

// Insertar texto dentro de el elemento HTML
miImagen.innerHTML = '<img src="imagenes/' + Pokemones[numero][0] + '.png">';
miNombre.innerText = 'Pokemon: ' + Pokemones[numero][0];
miTipo.innerText = 'Tipo:  ' + Pokemones[numero][1];
miPoder.innerText = 'Poder:  ' + Pokemones[numero][2];