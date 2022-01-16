console.log("############################################");
console.log("############################################");
console.log("Ejercicio 2");

//Enumera los distintos valores que puede tener “this” y pon un ejemplo de cada uno.
//se utiliza en objetos (contextos globales y de funcion), dependingo si se ejecuto en modo estricto o no.
//en el contexto global sera window


//en modo global es igual al window.
console.log("############## En modo global ####################");

let isThisWindow = this === window;
let valor1 = `En el contexto global, this es igual a window: ${isThisWindow}`;
console.log(valor1);

console.log("############## En una funcion sin especificar modo ####################");

//en una funcion sin especificar que modo es, es window.
function f1(window_input){
    let isThisWindow = this === window_input;
    let valor1 = `En una funcion simple, this es igual a window: ${isThisWindow}`;
    console.log(valor1);
}
f1(window);

console.log("############## En una funcion en modo estricto ####################");

//en una funcion en modo estricto, es sin especificar
function f2(){
    'use strict';
    let isThisWindow = this === undefined;
    let valor1 = `En una funcion en modo estricto, this es igual a sin especificar: ${isThisWindow}`;
    console.log(valor1);
}
f2();


console.log("############## Metodo dentro de un objeto ####################");

//en un metodo dentro de un objeto, se refiere al objeto propietario.

let objetoMuestra = {

    propiedadMuestra: "Propiedad muestra",

    metodoMuestra(){
        let valor = `En un metodo dentro de un objeto, se refiere a la propiedad dentro del objeto, en esta funcion this es igual al valor dentro de la propieda 'propiedadMuestra': ${this.propiedadMuestra === "Propiedad muestra" }`;
        console.log(valor);
    }
    
}
objetoMuestra.metodoMuestra();


//en un metodo arrow dentro de un objeto, se refiere al contexto de la funcion
console.log("############## Metodo arrow dentro de un objeto ####################");

var propiedadMuestra = "Propiedad en contexto";

let pruebaObjeto2 = {
    propiedadMuestra: "Propiedad muestra",

    metodoMuestra: () => {
        let valor = `En un metodo arrow dentro de un objeto, se refiere al contexto de la funcion, en esta funcion this es igual al elemento variable propiedadMuestra: ${this.propiedadMuestra === "Propiedad en contexto" }`;
        console.log(valor);
    }

}
pruebaObjeto2.metodoMuestra();

// en un evento, se refiere al lemento que recibe el evento.
console.log("############## En un evento ####################");

function actionButtonReceiver(element){
    console.log("En un evento, se refiere al lemento que recibe el evento");
    console.log(element);
}


// call puede modificar el this. En una funcion normal, this seria el contexto o window en este caso, pero aqui se paso el objeto
// y se pudieron multiplicar los dos numeros dentro la funcion multiplicarNumeros.
console.log("############## Usando call ####################");

let objeto = {
    numero: 3
}

let multiplicarNumeros = function(otroNumero, type_input){
    let resultado = this.numero * otroNumero;
    let comparativa = resultado === 12;
    if (type_input === "call"){
    console.log("call puede modificar el this. En una funcion normal, this seria el contexto o window en este caso, pero aqui se paso el objeto.");
    console.log(`Se pudieron multiplicar los dos numeros dentro la funcion multiplicarNumeros, en este ejmplo se introdujo 4 a la funcion y el objeto contiene el numero 3, por lo que el resultado es 12: ${comparativa}`);
    }
    else{
        console.log(`apply funciona igual que call pero ahora se pasan los datos en lista, igual el resultado es 12: ${comparativa}`);
        }
}

multiplicarNumeros.call(objeto, 4, "call");


console.log("############## Usando apply ####################");

// apply funciona igual que call pero ahora se pasan los datos como arreglo

let numeros = [4, "Apply"]
multiplicarNumeros.apply(objeto, numeros);


// Para finalizar, Bind 
console.log("############## Usando bind ####################");

let objetoToBind = {

    texto1: "Con bin, regresa una funcion donde se une otra funcion y un objeto",
    texto2: ", y la funcion puede hacer uso de los elemento dentro del objeto"
}

let functionToBind = function(){
    console.log(`${this.texto1}${this.texto2}`);
}

let funcionRegresada = functionToBind.bind(objetoToBind);
funcionRegresada();


