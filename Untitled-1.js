

//Triangulo

    //console.log("El area de un triángulo de base 5 y altura 7 es: " + 5*7/2)
    let base = 5
    let altura = 7
    /*
    function triangulo(base, altura){
        return base * altura / 2
    }
    */
    let triangulo = (base, altura) => base * altura / 2
    console.log(`El area de un triángulo de base ${base} y altura ${altura}
    es: ${triangulo(base, altura)}`)
//Circulo
    let radio =  2
    let circulo = (radio) => 3.1416 * Math.pow( radio , 2)
    console.log(`El area de un circulo de radio ${radio} es: ${circulo(radio)}`)