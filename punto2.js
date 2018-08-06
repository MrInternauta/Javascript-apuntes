class Punto{
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    moverenX(x) {
        this.x += x
    }
    moverenY(y) {
        this.y += y
    }

    distancia(p) {
        const x = this.x - p.x
        const y = this.y - p.y
        return Math.sqrt(x * x + y * y)
    }



}
const p1 = new Punto(0,4)
const p2 = new Punto(3,0) 

console.log(p1.distancia(p2))
p1.moverenX(10)
console.log(p1.distancia(p2))
p2.moverenY(-4)
console.log(p1.distancia(p2))


/*
“Hay 3 formas de crear objetos”:

Creando una funcion y usando prototipos
Creando un objeto y usando Createobject()
Creando una clase y creando una instancia de la misma
*/