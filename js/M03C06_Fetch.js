// construir una promesa
/*function sumar(x,y){
    var promesa = new Promise(funtion(resolve,reject){
        if (x==undefined || y==undefined){
            reject("Error: falta un numero");
        }else{
            resolve(x+y);
        }
    })
}

*/











//leer rchivo txt
/*fetch("test.txt").then(function(data){
    console.log(data);
    var texto= data.text().then(function(data2){
        console.log(data2);
    })
})
*/
//lo mismo pero abreviado
//fetch("test.txt").then(d0>d.text().then(t=>console.log(t))).catch(err=>console.log(err));

//haremos lo mismo pero usando async away

async function leerDatos(){
    let datos = await fetch("test.txt");
    console("async/await------------------")
    console.log(datos);
    let texto = await datos.text();
    console.log(texto);
}

leerDatos();
//-----------------------------------
// leer desde api perrito
async function leerPerros(){
    let data = await fetch("");
    console(data);
    console.log(datos);
    let datos = await data.json();
    console.log(datos);
}

leerDatos();

//----------------------------------------------
//pokemon 