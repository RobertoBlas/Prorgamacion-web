/*
Modelo de Objeto del Documento / DOM {Document Object Model}

-Es toda la estructura HTML del documento.
-El 99% de las veces que usamos Javascript, Interactuamos con el DOM
-El DOM no es Javascrip
-El DOM se considera una API (Aplication Programing Interface)


Nodos

Cada parte del documento es un nodo, aunque tecnicamente los elementos son objetos,
para javascript cada parte del arbol es un nodo.

Hay varios tipos de nodos (12), los más usados son:

-Element node -> Cualquier etiqueta del HTML -> 1
-Text node -> Contenido de la etiqueta -> 3 
-Comment node -> Cualquier comentario en HTML ->8

NOTA: Cualquier consulta para saber el tipo de nodo, nos devuelve uno de estos numeros

Acceder al DOM desde Navegador

1. Para acceder a un elemento HTML desde el navegador utilizamos las DevTools.
2. Tenemos para seleccionar la etiqueta que queremos consultar.
3. En la consola usamos el comando -> $0 - Despliega las propiedades del nodo.

NOTA: Este comando $0 solo funciona en el navegador, no en el archivo Javascript.

Seleccionando el H1

>> $0 // Nodo del H1
>> $0.id // "Title"
>> $0.className // "Title"
>> $0.textContent // "DOM - Document Object Model"
>> $0.nodoType // 1

Consultando contenido H1

>> $0.childNodes // NodeList
>> $0.childNodes[0] // #text "DOM - Document Object Model"
>> $0.childNodes[0].length // 27
>> $0.childNodes[0].data // "DOM - Document Object Model"
>> $0.childNodes[0].nodeType // 3

Consultando al comentario

>> $0 //  <!-- <P>Soy un comentario</P> -->
>> $0.textContent //   "<P>Soy un comentario</P>"
>> $0.length // 28
>> $0.nodeType // 8
*/