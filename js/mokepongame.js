function iniciarjuego(){
let botonMascotaJugador = document.getElementById('boton-mascota')
//let botonMascotaEnemigo

botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
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
    
}


window.addEventListener('load',iniciarjuego)

