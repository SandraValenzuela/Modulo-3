// Ejercicio 1
let fotoPerro =document.querySelector("#imgPerro");//-------------------------ejercicio 2.1
console.log(fotoPerro);

 
$.getJSON("https://dog.ceo/api/breeds/image/random ", function (data){ 
    console.log(data)//--------------------------------------------------------ejercicio 1.1
   fotoPerro.setAttribute("src",data.message)//--------------------------------ejercicio 2.1 
    })


//----------------------------------------------------------------------------
//Ejercicio3.1-----------------------------------------------------------------ejercicio 3.1
 let foto2Perro = document.querySelector("#imgPerroEJ3");
 console.log(foto2Perro);
 let boton =document.querySelector("#boton")
 console.log(boton)
 boton.addEventListener("click",function(e){
        $.getJSON("https://dog.ceo/api/breeds/image/random", function (data){
         foto2Perro.setAttribute("src",data.message)
        })
 })




 //-------------------------------------------------------------------------------
 //Ejercicio 2.1----------------------------------------------------------------ejercicio 2.1

 $.getJSON("https://restcountries.com/v3.1/name/{name}", function (data){
     console.log(data);
 })