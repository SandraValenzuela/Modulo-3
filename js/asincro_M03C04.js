var chiste = document.querySelector('.puntos');
var btnActualizar = document.querySelector('#Actualizar');

function obtenerChiste(){
    $.getJSON("https://api.chucknorris.io/jokes/random", function(data){
    insertarChiste(data)
    });
};
obtenerChiste();

function insertarChiste(data){
    chisteText.innerText = data.value;
    chiste.appendChild(chisteText);
};