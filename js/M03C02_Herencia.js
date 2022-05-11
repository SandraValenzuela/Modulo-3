//trabajo de arreglos
let plantas=["ruda","oregano","cilantro","perejil","tomate"];
console.table(plantas);
//1.- eleimar una planta alfinal

plantas.pop();
console.table(plantas);

//2.- eliminar una planta al principio

plantas.shift();
console.table(plantas);

//3.- agregar una planta al final
plantas.push("menta");
console.table(plantas);

//4.- eliminar la planta que se llama cilantro
 plantas.splice(1,1);
 console.table(plantas);

 //5.- alternativa a eliminar el cilantro, sin saber su posicion
 plantas=["ruda","oregano","cilantro","perejil","tomate"];
console.table(plantas);

// con este for recorrer elemento por elemento
// y si el elemento no es cilantro, lo copio en el nuevo arreglo
var plantas2=[];
for(i=0;i<plantas.length;i++){
    if(plantas[i]!="cilantro"){
        plantas2.push(plantas[i]);
    }
}
console.table(plantas2);












//funcion filter
var numeros=[1,2,3,4,5];

//quiero los numeros distintos a 3
var numero2 = numeros.filter




//eliminar la planta que se llama perejil
plantas =["ruda","oregano","cilantro","perejil","tomate"];








//dates
var fecha = new Date(); // nos entrega la fecha actual
console.log(fecha);
var anio=fecha.getFullYear();
console.log("año" + anio);

var hoy = new Date(2022,18); // definimos nosotros una fecha (obligatoriamente:; año, mes, opcional: dia, hora, min, seg, ms)
console.log(hoy);

// pedir el año de nacimiento y entregue la edad actual
var anioNacimiento = prompt("Ingrese su año  de nacimiento");
var edad = fecha.getFullYear()- anioNacimiento;
alert("su edad es: " + edad);

//otras Funciones

console.log("----------------------")
console.log(fecha.getDate());
console.log(fecha.getDay());
console.log(fecha.getFullYear());
console.log(fecha.getDate());
console.log(fecha.getDate());






//-----------------------------------
class Usuario{
    constructor(nombre,password){
        this.nombre=nombre;
        this.password=password;
    }
    ingresar=function(){
        console.log("bienvenido " + this.nombre);
    }
    salir=function(){
        connsole.log("adios " + this.nombre);
    }
}

var usuario1= new Usuario("Alexis", "123");
var usuario2= new Usuario("Paula", "345");
var usuario3= new Usuario("Clemente", "898");

var arregloUsuario = [usuario1, usuario2, usuario3];
console.log("el nombre del usuario es: " + usuario1.nombre);
usuario1.ingresar();
console.log("el nombre del usuario es : " + arregloUsuario[1].nombre)
//--------------------------------------
//Clase que hereda todas las propiedades y funcionamiento 
//desde la clase Usuario
class Administrador extends Usuario{
    eliminarUsuario= function(nombre){
        arregloUsuario = arregloUsuario.filterfunction;
    }
}
