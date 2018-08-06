/*function saludarGomez(nombre){
    console.log(`Hola ${nombre} Gomez `)
}

function saludarPerez(nombre) {
    console.log(`Hola ${nombre} Gomez `)
}
*/

function saludarFamilia(apellido) {
    return function (nombre) {
        console.log(`Hola ${nombre} ${apellido}`)
    }
}

let saludarPerez = saludarFamilia('perez');

saludarPerez("Alberto")