
var dias= new Date();
var semana = new Array (7);

semana[0]= "Domingo";
semana[1]= "Lunes";
semana[2]= "Martes";
semana[3]= "Miercoles";
semana[4]= "Jueves";
semana[5]= "Viernes";
semana[6]= "Sabado";

var dias = semana[dias.getDay()];
//console.table(dias);
alert("Hoy dia es: " + dias);