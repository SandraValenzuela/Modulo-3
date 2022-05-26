let foto=document.querySelector("img");
//let foto2 = $("img");
let btn=document.querySelector("#boton");
//let btn=$("#boton");

console.log(foto);
//console.log(foto2);

console.log(btn);

//agregar click
btn.addEventListener("click", function(e){
    $.getJSON("https://dog.ceo/api/breeds/image/random", function(data){
        let obj=data;
        let URLimagen=data.message;

        foto.setAttribute("src", URLimagen);
       
    })

})

//--------------------------------------------------------------------------------------------------------------
// Ejercicio Gato // Boton gato
let fotoGato=document.querySelector("#imgGato");
let btn1=document.querySelector("#botonGato");
console.log(fotoGato);
console.log(btn1);

btn1.addEventListener("click", function(el){
    $.getJSON("https://api.thecatapi.com/v1/images/search", function(data){
        
        //console.log(data)
        
        fotoGato.setAttribute("src", data[0].url);
    })

})


//https://api.thecatapi.com/v1/images/search