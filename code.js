//Guardamos numero de pokemones que el usuario elige
var numero = prompt  ("¿Cuántos Pokemones quieres?");
//Declaramos nuestro ciclo
var Pokemones = [];
for(var i = 0; i< numero; i++){
    var Pokemon = prompt ("Escribe un Pokemon");
    Pokemones.push(Pokemon);
    document.write("<strong>" + Pokemones[i] + " yo te elijo! <br>");
}
document.write("Haz elegido tus " + numero + " Yo te elijo! <br>")
/*Declarar array vacio 
var Pokemones = []; */
/*Guardamos nombres de pokemones 
var Pokemon = prompt ("Escribe un Pokemon"); */
/*Guardamos los textos del usuario de prompt var "Pokemon" para que array lea 
Pokemones.push(Pokemon); */
/*Imprimimos linea final en el documento
document.write("Haz elegido tus " + Pokemones + " pokemones!");/*

/* ciclo "for" es un ciclo determinado*/