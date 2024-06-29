let ataqueJugador

function iniciarjuego(){
let botonMascotaJugador = document.getElementById('boton-mascota')
botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

//BotonesdeAtaquesdelJugador
let botonFuego = document.getElementById('boton-fuego')
botonFuego.addEventListener('click', ataqueFuego)
let botonAgua = document.getElementById('boton-agua')
botonAgua.addEventListener('clic', ataqueAgua)
let botonTierra = document.getElementById('boton-tierra')
botonTierra.addEventListener('clic', ataquetierra)


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
    let ataqueAleatorio = aleatorio(1,3)
    let SpanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (ataqueAleatorio==1){
        SpanMascotaEnemigo.innerHTML = "Hipodoge "
    }
    else if (ataqueAleatorio==2) {
        SpanMascotaEnemigo.innerHTML = "Capipepo "
    }
    else if(ataqueAleatorio==3){
        SpanMascotaEnemigo.innerHTML= "Ratigueya "
    }

}

function ataqueFuego(){
    ataqueJugador='FUEGO'
}

function ataqueAgua(){
    ataqueJugador='AGUA'
}

function ataquetierra(){
    ataqueJugador='TIERRA'
}


function aleatorio(min, max) {
    return Math.floor(Math.random()*(max-min +1) + min)
}


window.addEventListener('load',iniciarjuego)

