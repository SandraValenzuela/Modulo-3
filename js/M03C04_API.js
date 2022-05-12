class Gato{
    contructor(nombre,raza){
        this.nombre=nombre;
        this.raza=raza;
    }
}

// Creamos dos objetos de tipo gato
let gato1= new Gato("neko","angora");
let gato2=new Gato("cat","egipcio");

//Transformamos el gato1 en un texto con formato JSON

let gatoJSON= JSON.stringify(gato1);
console.log(gato1);
//console.log(gato.JSON);

//hacemos el proceso inverso, transformamos el texto en un objeto
let gatoObj = JSON.parse(gatoJSON);
console.log(gatoObj);
// creamos un arreglo, lo transformamos en texto con formato JSON y lo enciamos a pantalla
let arregloGatos=[gato1,gato2];
let arregloJSON=JSON.stringify(arregloGatos);
/*XML
<Gato>
    <nombre>neko</Nombre>
    <raza>angora</Angora>
</Gato>
personalizado:
Clase=Gato
}
*/

//--------------------------------------
//
console.log("------------------------")
console.log("consulta a PI pokemon");
$.getJSON("https://pokeapi.co/api/v2/pokemon/25", function(data){ 
        let pokemon=data;
        //console.log(pokemon);
        //nombre
        console.log("nombre: "+ pokemon.name);
        //numero(id)
        console.log("Nº: " + pokemon.id);
        //tipos (types)[arreglo]
        console.log("typos: " + pokemon.types[5])
        //foto: font_default
    }
);
console.log("---------------------------")

//crear una funcion que elija un numero entero al azar entre 1 y 800
//Usar una funcion para buscar un pokemon al azar (por numero)
//cuando se cargue, `poner la informacion en el Html, incluyendo la foto