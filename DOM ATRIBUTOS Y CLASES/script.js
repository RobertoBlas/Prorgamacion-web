/*
Accedemos a los objetos con Javascript a tráves de las variables.
getElementById y ID
*/

const titulo = document.getElementById('title');

console.log(titulo);

/*

Atributos

element.getAttribute('attribute') -> Devolver el atributo que tenga 
declarado en la etiqueta html.

element.setAttribute('atributte', 'value')
-> modifica el valor del atributo 
*/

//console.log(titulo.getAttribute('class'));

//titulo.setAttribute('id', 'big-title');
//console.log(titulo);

/*

Clases 

element.classList.add('class', 'class', ....) -> Añadir una o más clases
element.classLis.contains('class') -> Devolver true si tiene la clase
o false si no la tiene.

element.classList.replace('oldClass', 'newClass') -> Sustituye una clase
por otra.
*/

/*titulo.classList.add('big-title','red-title');
titulo.classList.remove('main-title', 'red-title');

console.log(titulo);
//console.log(titulo.classList.contains('main-title'));
/*
if(titulo.classList.contains('red-title')){
    console.log('si lo tienes');
} else{
    console.log('Estas perdido');
}

titulo.classList.replace('red-title', 'small-title');
console.log('titulo');
*/
/*
Atributos "directos"
    id
    className
    nodeName
    textContent
    innerHtml
*/
/*
console.log(titulo.id); // 'title'
console.log(titulo.className); // 'main-title'
console.log(titulo.nodeName); // 'H1'
console.log(titulo.nodeType); // 1
console.log(titulo.hidden); // false
console.log(titulo.textContent) // DOM * Atributos y Clases desde javascript
console.log(titulo.innerHTML); // DOM * Atributos y Clases desde Javascript
*/
/*
Atributos "Anidados"
*/

//console.log(titulo.firstChild.nodeValue);
//console.log(titulo.firstChild.nodeType);
//console.log(titulo.firstChild.isConnected);


/*

Atribution NodeList

*/

console.log(titulo.childNodes[0]);
console.log(titulo.childNodes[0].length);
console.log(titulo.childNodes[0].nodeName);

console.log(titulo.childNodes[1]);
console.log(titulo.childNodes[1].textContent);
console.log(titulo.childNodes[1].hidden);
console.log(titulo.childNodes[1].nodeType);