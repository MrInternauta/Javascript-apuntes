const bIniciar = document.getElementById('bIniciar')
const bPausa = document.getElementById('bPausa')
const bReiniciar = document.getElementById('bReiniciar')

class Timer {

    constructor() {
        this.init() // --- inicializar los atributos de Timer y estilos de botones
    }

    init() {
        console.clear()

        this.iniciado = false
        this.timer = null
        this.ahora = 0
        this.momento = {
            horas: 0,
            minutos: 0,
            segundos: 0,
            decimas: 0
        }
        this.enPausa = false

        bIniciar.classList.remove('oculto')
        bPausa.classList.add('oculto')
        bReiniciar.classList.add('deshab')
    }

    reset() {
        clearInterval(this.timer)
        this.init()
        this.update() // --- repintar el html
    }

    start() {
        if (!this.iniciado) {
            this.timer = setInterval(function () {
                if (!this.enPausa) {
                    this.ahora += 1
                    bReiniciar.classList.remove('deshab')

                    this.momento.decimas = this.ahora % 10

                    // const tA = ( this.ahora / 10 ).toFixed(0)
                    // fix by @roddyvitali, thanks
                    const tA = Math.trunc(this.ahora / 10)

                    this.momento.segundos = tA % 60
                    this.momento.minutos = Math.floor((tA / 60) % 60)
                    this.momento.horas = Math.floor((tA / 60) / 60)

                    this.update()
                }
            }.bind(this), 100) // 100ms = 1 decima de seg

            this.iniciado = true
        }
        bIniciar.classList.add('oculto')
        bPausa.classList.remove('oculto')
        this.enPausa = false
    }

    pause() {
        bIniciar.classList.remove('oculto')
        bPausa.classList.add('oculto')
        this.enPausa = true
        console.log(this.momento)
    }

    update() {
        let hh = document.getElementById('hh')
        let mm = document.getElementById('mm')
        let ss = document.getElementById('ss')
        let ms = document.getElementById('ms')
        hh.textContent = ('0' + this.momento.horas).substr(-2)
        mm.textContent = ('0' + this.momento.minutos).substr(-2)
        ss.textContent = ('0' + this.momento.segundos).substr(-2)
        ms.textContent = this.momento.decimas
    }
}

const main = () => {
    const miTimer = new Timer()

    bIniciar.addEventListener('click', miTimer.start.bind(miTimer))
    bPausa.addEventListener('click', miTimer.pause.bind(miTimer))
    bReiniciar.addEventListener('click', miTimer.reset.bind(miTimer))

    feather.replace() // iconos
}

main()