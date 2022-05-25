var nombre = document.getElementById('nombre');
var mensaje = document.getElementById('mensaje');

document.getElementById('mensaje').onclick = function(){
  alert("HOLA " + nombre.value + " ¿Como va el día? :)")
}

