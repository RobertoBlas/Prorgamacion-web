/*
Objetos
    Son estructuras de datos que representan propiedades valores y acciones
Propiedades o atributos
    Son las características del objeto. (Nombre, Tipo, Poder, Habilidades)
    Se representan por pares 'Clave (Key)' : 'Valor (Value)'
    Datos: Strings, numbers, (Int o Float), Booleans, Arrays.
Comportamientos o acciones 
    Es aquello que puede hacer un objeto (Comer, Atacar, Defenderse, Evolucionar)
    Se definen a través de funciones


Para declarar un objeto escribimos:
const nombreObjeto = {
    // Pares Clave : Valor
    Key : Value,
}

Para acceder a las propiedades y acciones del objeto utilizamos la 
nomenclatura del punto '.'

    nombreObjeto.Key

*/

const pokemon = {
    nombre : 'Pikachu', 
    poder : '1000',
    capturado : true,
    habilidades : ['Impactrueno', 'Rayo', 'Chispitas']
}
// console.log(pokemon)
/*
console.log(pokemon.nombre);
console.log(pokemon.poder);
console.log(pokemon.capturado);
console.log(pokemon.habilidades);

console.log(pokemon.habilidades[0]);
console.log(pokemon.habilidades[1]);
console.log(pokemon.habilidades[2]);

*/
//Ciclo For In -> Objetos

for(let key in pokemon){
    console.log(key)
}
for(let Value in pokemon){
    console.log(pokemon[Value])
}
//Ciclo For Of -> Arrays
for(let key of pokemon.habilidades){
    console.log(key)
}