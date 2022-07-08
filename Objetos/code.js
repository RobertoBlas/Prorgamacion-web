/*
Instrucciones Prácticas Objetos
    - Crear una clase Movie con las propiedades: Title, gender, year.

        class nombreClase{
            consturctor(propiedades){
                this.propiedad = propiedad
            }
        }
    - Crear un método que nos regrese el title.

        nombreMétodo(){
            return código que devuelve
        }
    - Crear un método que nos regrese toda la información concatenada
      en un string. (Template Strings)
      "Esta pelicula se llama ChipAndDale es de genero Animado, creado en 
       el año 2022"
    - Solicitar al usuario 3 Peliculas y agregarlas a un array.
    
      prompt ('Mensaje');
      
      let nombreArray = [Objetos-1{}, Objetos-2{}, Objetos-3{},  ]
    
    - Crear una función que muestre el title de todas las películas.
    - Crear una función que muestre por consola el tittle de todas las 
      peliculas.

      const nombreFuncion = () => {
        codigo a ejecutar
      }
      for(const nombre of array){
        codigo que ejecuta
      }
      nombreFuncion();

    - Crear una función que muestre por consola toda la información 
      concatenada en un string de las peliculas.
*/

class Movie{
    constructor(title, gender, year){
        this.title = title
        this.gender = gender
        this.year = year 
    }
    
    getTitle(){
        return this.title
    }
    getInfo(){
        return `Esta película se llama ${this.title} es de género
        ${this.gender} y se estrenó en el año ${this.year}.`
    }
}

let films = [];

while(films.length < 3){
    let title = prompt('Agrega un Título de Película');
    let gender = prompt('¿Cuál es su genero?');
    let year = prompt('¿En qué año se estrenó?');
    
    films.push(new Movie(title,gender,year));
}

//funciones

const showNames = () => {
    for(const film of films){
        console.log(film.getTitle());
    }
}

showNames();


