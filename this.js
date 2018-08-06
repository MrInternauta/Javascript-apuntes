class Persona {
    constructor(nombre, amigos = []) {
        this.nombre = nombre
        this.amigos = amigos
    }
    listar(){
        
        /*
        const self = this
        this.amigos.forEach(function(amigo){
            console.log(`Hola me llamo ${self.nombre} y soy amigo de ${amigo}`)
        })
        
        this.amigos.forEach(function (amigo) {
            console.log(`Hola me llamo ${this.nombre} y soy amigo de ${amigo}`)
        }.bind(this) )
        */
        this.amigos.forEach( (amigo) =>{
            console.log(`Hola me llamo ${self.nombre} y soy amigo de ${amigo}`)
        })

    }
}

const sacha = new Persona("Sacha", ["pedro", "juan", "pepe"])