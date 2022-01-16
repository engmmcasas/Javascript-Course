// Ejercicio 1

import { ejercicio1 } from "./ejercicio1/ejercicio1.js";
console.log("############################################");
console.log("############################################");
console.log("Ejercicio 1");
const threePointsStrategy = {
  diasTrabajo: "fin de semana",
  horarioTrabajo: "12pm a 5pm",
  motivacion: "completar mi formacion como data scientist/machine learning engineer",
  softwareComplementarios: "django/flask en python y, herramientas big data en java/scala"
}

let ejercicio1_array = ejercicio1(threePointsStrategy);
console.log(ejercicio1_array);

// Ejercicio 2




// Ejercicio 3

import {ejercicio3} from "./ejercicio3/ejercicio3.js";

console.log("############################################");
console.log("############################################");
console.log("Ejercicio 3");
let string_input = "ThreePoints me ayuda a mi formacion profesional";
console.log(`String a invertir: ${string_input}`);
let string_reversed = ejercicio3(string_input);
console.log(string_reversed);

// Ejercicio 4

import { ejercicio4_Login} from "./ejercicio4/ejercicio4.js";





// Ejercicio 5

const button1 = document.getElementById("loginSuccess");
const button2 = document.getElementById("loginFailure");

button1.addEventListener("click", event => {
  let login = new ejercicio4_Login("admin", "passwd");
  login.login();
});

button2.addEventListener("click", event => {
  let loginWrong = new ejercicio4_Login("Manuel", "el_mero_password_123");
  loginWrong.login();
});


// Ejercicio 6


let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};


