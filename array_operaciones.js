const suma = (...numeros)=>  numeros.reduce((acum, numero)=> acum += numero)
const doble = (...numeros)=>  numeros.map(numero=> numero*2)
const pares= (...numeros)=> numeros.filter((numero)=> numero % 2 == 0 )

pares(1,2,3,4,5,6)
doble(1,2,3)
suma(1,2,3)

/*reduce() aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor. Sintaxis: var resultado = arr.reduce(funcion[, valorInicial]);

push() agrega uno o más elementos al final de un array y devuelve la nueva longitud del array. Sintaxis: array.push(element1, …, elementN)

map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos. Sintaxis: var nuevo_array = arr.map(function callback(currentValue, index, array) {
// Elemento devuelto de nuevo_array
}[, thisArg])

filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada. Sintaxis: arr.filter(callback[, thisArg])


Les comparto la definición de los métodos que a utilizado Sasha en este video, a mi me ayudo mucho para entender mejor.

reduce:
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce
push:
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/push
map:
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map
filter:
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter

*/