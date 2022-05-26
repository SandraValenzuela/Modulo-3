$(document).ready(function (){
    console.log("Hola mundo");
});

//cargar el h1 con js
var titulo = document.querySelector("h1");
//cargar el h1 con Jquery
var titulo2 = $("h1");


//cargar el h1 con js
var titulo3 = document.querySelector("#titulo1");
//cargar el h1 con Jquery
var titulo4 = $("#titulo1");
var parrafo = $("p.estilo2");
var link=$("a[https://www.google.cl]");

//cargar solo el primer parrafo usando next
var primerParrafo = $("h1").next ("p");

//cambiar el texto de titulo 1 con js
document.querySelector("h1").innertext ="cambio de titulo";
// lo mismo con Jquery
$("h1").text("cambio de titulo");

// para el estilo
document.querySelector("h1").style ="color: red";
// con Jquery
$("h1").css("color:red");

