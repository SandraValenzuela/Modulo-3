//ejercicio 1: crear una clase que defina un rectangulo

class rectangulo{
    constructor (largo, ancho){
        this.largo= largo;
        this.ancho= ancho;
    }
}



//ejercicio 2: crear una clase que defina un usuario



//agregar una propiedad a un usuario
usuario1.activo=false;
console.log(usuario1);
console.log(usuario2);
//llamar a una propiedad que no esta definida
console.log(usuario1.login);
//eliminar una propiedad
delete usuario1.activo;
console.log(usuario1);
delete usuario1.password;
console.log(usuario1);
console.log(usuario2);


//ejercicio 3:redefinir la clase rectangulo para que me entregue el area y el perimetro.

class Rectangulo2{
    constructor(largo, ancho){
        this.largo=largo;
        this.ancho=ancho;
    }
    area= function(){
        return this.largo*this.ancho;
    }
    perimetro= function (){
        return 2 (this.largo+this.ancho);
    }
}

let rect1=new Rectangulo2(10,20);
console.log(rect1.area());
rect1.ancho=30;
console.log(rect1.area());

 