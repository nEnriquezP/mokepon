let ataqueJugador
let ataqueEnemigo
let vidasJugador =3
let vidasEnemigo = 3

function iniciarjuego(){
let botonMascotaJugador = document.getElementById('boton-mascota')
botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

//BotonesdeAtaquesdelJugador
let botonFuego = document.getElementById('boton-fuego')
botonFuego.addEventListener('click', ataqueFuego)
let botonAgua = document.getElementById('boton-agua')
botonAgua.addEventListener('click', ataqueAgua)
let botonTierra = document.getElementById('boton-tierra')
botonTierra.addEventListener('click', ataqueTierra)


}

function seleccionarMascotaJugador(){
    
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')

    let spanMascotaJugador = document.getElementById('mascota-jugador')
    

    if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML= "Hipodoge"
        }
        else if(inputCapipepo.checked) {
           spanMascotaJugador.innerHTML = "Capipepo"
        }
        else if(inputRatigueya.checked){
            spanMascotaJugador.innerHTML = "Ratigueya"
        }
        else {
            alert("Debes de Seleccionar algo")
        }
        seleccionarMascotaEnemigo()
} //Aqui termina la función selecionarMascotaJugador

function seleccionarMascotaEnemigo () {
    let mascotaAleatorio = aleatorio(1,3)
    let SpanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatorio==1){
        SpanMascotaEnemigo.innerHTML = "Hipodoge "
    }
    else if (mascotaAleatorio==2) {
        SpanMascotaEnemigo.innerHTML = "Capipepo "
    }
    else if(mascotaAleatorio==3){
        SpanMascotaEnemigo.innerHTML= "Ratigueya "
    }

}

function ataqueFuego(){
    ataqueJugador='FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador='AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador='TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1, 3)
    if(ataqueAleatorio==1){
        ataqueEnemigo='FUEGO'
    }
    else if(ataqueAleatorio==2){
        ataqueEnemigo='AGUA'
    }
    else {
        ataqueEnemigo='TIERRA'
    }

    combate()
}

function crearMensaje(resultadoCombate){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    //let resultadoCombate = document.createElement('p')
    parrafo.innerHTML = ('Tu Mascota atacó con ' + ataqueJugador + ' <br>La Mascota de tu Enemigo atacó con ' + ataqueEnemigo + '<br>' +resultadoCombate)
    sectionMensajes.appendChild(parrafo)
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')


    if(ataqueJugador == ataqueEnemigo){
        crearMensaje(" EMPATE")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje(" GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje(" GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo =='AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo
    } else {
        crearMensaje(" PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML= vidasJugador
    }




}

function aleatorio(min, max) {
    return Math.floor(Math.random()*(max-min +1) + min)
}


window.addEventListener('load',iniciarjuego)

