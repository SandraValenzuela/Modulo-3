//ejercicio 1
//gato1
let Objeto= {
    nombre: "kitty",
    raza: "persa",
    Pelaje: "Largo y grueso",
    sexo:  "hembra",
}
console.log(Objeto); //Muestra en pantalla los elementos del gato (Objeto)
//Gato 2
let Objeto1= {
    nombre: "oso",
    raza: "kkkkk",
    Pelaje: "grueso",
    sexo:  "hembra",
}
console.log(Objeto1); //Muestra en pantalla los elementos del gato2 (Objeto)
//Gato 3

//-----------------------------------------------------------------------------------
//ejercicio 2
let Objeto2= {
    nombre: "pepe",
    raza: "bbbbb",
    Pelaje: "largo",
    sexo:  "Macho",
}
console.log(Objeto2);
//---------------------------------------------------------------------------------------
//ejercicio del Gato Con funcion Class (Clases)
class Gato {  
    constructor(nombre, raza, pelaje, sexo){ 
         this.nombre = nombre;
         this.raza = raza;
         this.pelaje = pelaje;
         this.sexo = sexo;
   }
}
let Gato1 = new Gato ("kat","mmm","corto","Macho");    //Gato 1
let Gato2 = new Gato ("manolo","ssss","largo","Hembra");   //Gato 2
let Gato3 = new Gato ("mini","pppp","largo","Hembra");  // Gato 3

//test -
console.log(Gato1);
console.log(Gato2);
console.log(Gato3);
console.table(Gato1);
console.table(Gato2);
console.table(Gato3);

//-----------------------------------------------------------------------------
//ejercicio 3

class Televisor{
    constructor(Tamano, Marca,Modelo){
        this.Tamano = Tamano;
        this.Marca = Marca;
        this.Modelo = Modelo;
        
    }
}
let Televisor1 = new Televisor ("22 Pulgadas","Samsung","Fs-330");
let Televisor2 = new Televisor ("43 Pulgadas","LG","ps-520");

console.log(Televisor1);
console.log(Televisor2);
//---------------------------------------
//Ejercicio 4
class Archivo {
    constructor (nombre,tamano,ruta){
        this.nombre = nombre;
        this.tamano = tamano;
        this.ruta = ruta;
    }
}
let Archivo1 = new Archivo ("Js","250 bits","nnnnn");
    
console.log(Archivo1);
//------------------------------------------
//Ejercicio 5
class Cancion {
    constructor (nombre, autor, duracion){
        this.nombre = nombre;
        this.autor = autor;
        this.duracion = duracion;
    }
}
let Cancion1 = new Cancion("las rosas"," camila gallardo"," 123 minutos");

console.log(Cancion1);
//----------------------------------------
//Ejercicio 6

