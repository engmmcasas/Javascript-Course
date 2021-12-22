// Ejercicio 1
import { enunciado } from "./aboutme.js";

console.log("############################################");
console.log("############################################");
console.log("Ejercicio 1");
enunciado();
//console.log(output);
// Ejercicio 2
console.log("############################################");
console.log("############################################");

console.log("Ejercicio 2");
console.log("Se ejecuta primero el contenido de aboutme.js");

// El contenido aboutme.js

// Ejercicio 3
console.log("############################################");
console.log("############################################");

console.log("Ejercicio 3");

let respuesta3 = `Monitor de red

Es la herramienta del navegador que se encarga de detallar las solicitudes hechas, su evolución temporal, y sus caracteristicas.

Contempla la lista de solicitudes donde se muestran el codigo regresado, el tipo de metodo , el nombre del archivo, la ruta de donde se pidio, el tipo de contenido y tamaño. Igualmente, cada uno tiene una barra de tiempos apilados que muestras la evolucion de la solicitud.

Al ver el detalle de la alguna solicitu se podra ver sus encabezados, cookies, parametros, respuestas y la evolucion temporal en detalle.


Memoria

La herramienta de memoria permite tomar una captura del tamaño de cada uno de las partes de la pagina web, categorizarlos como en strings, scripts, otros y objetos (y en la version que tengo en uno mas que es domNode), y mostrarlos ya sea como mapa de arboles, vista agregador o dominadores, con el ultimo fin de poder saber que secciones de la pagina toman mas o menos memoria y tomar acciones en caso de que sea requerido.


Performance

La herramienta de performance tiene la tarea de evaluar la eficiencia de la pagina y los elementos que ocurren en esta. Se tiene tres herramientas internas llamadas Frame Rate, Waterfall, Call Tree y Frame Chart. 

El frame rate es ampliamente utilizado en videojuegos y videos por ser la tasa de imagenes producidas en un intervalo de tiempo y actualmente se utiliza mucho para evaluar la responsividad de una pagina web. De acuerdo a la documentacion, una buena meta es 60 fps pero si otro proceso estorba para cumplir el objetivo, se puede ver facilmente en esta vista y usar las otras herramientas para tener un mejor diagnostico para solucionarlo. 

El Waterfall evidencia los procesos hechos por el navegador como repaints, ejecuciones de javascript, etc, los distingue en diferentes categorias, da detalles de estos y mide el tiempo que tomo. 

El Call Tree proporciona un resumen agregador de las funciones de javascript con el fin de saber priorizar la accion sobre las que toman mas tiempo de ejecutar. Finalmente, el Flame Rate muestra el detalle de las funciones de javascript hechas que fueron resumidas para el Call Tree. Desde aquí se puede saber que funciones fueron llamadas durate el perfil, cuanto tardaron en correr y desde donde fueron llamadas.`

console.log(respuesta3);

// Ejercicio 4
console.log("############################################");
console.log("############################################");
console.log("Ejercicio 4");
import { divisibleEntre7 } from "./divisible7.js";
divisibleEntre7();

// Ejercicio 5
console.log("############################################");
console.log("############################################");
console.log("Ejercicio 5");

// Ejercicio 6
console.log("############################################");
console.log("############################################");

import { formatter } from "./formatter.js";
console.log("Ejercicio 6");
formatter.append("Master Full Stack Development");
formatter.toLowerString("HoLa MUnDO");

