function boletinInformativo() {
    var distancia = prompt("¿Cual es tu distancia (KM) a San Nicolas?")
    if (distancia < 20) {
        alert("¡Te enviaremos tu boletin informativo de forma gratuita!")
    } else if (distancia > 20) {
        alert("¡El envio tendra un costo de $1500!")
    } else {
        alert("¡Ingresa solo el numero!")
    }
}