class Libro {
    constructor(nombre, autor, editorial, genero){
        this.nombre = nombre
        this.autor = autor
        this.editorial = editorial
        this.genero = genero
    }
}

const mostrarLibro= new Libro("HarryPotter", "J.K.Rowling", "Bloomsbury", "Novela");
const mostrarLibro2= new Libro("Blanco letal", "J.K.Rowling", "Salamandra", "Novela")
const mostrarLibro3= new Libro("El Principito", "Antoine de Saint Exupery", "Salamandra", "Cuento");
console.log(mostrarLibro);
console.log(mostrarLibro2);
console.log(mostrarLibro3);

let Libros=["nombre", "autor","editorial", "genero"];
console.log(Libros[1])

