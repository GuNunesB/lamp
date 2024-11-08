/**
 * Simulador de lâmpada
 * @author Gustavo Nunes Bispo
 */

let chave = false // O interrupitor está desligado
let lampada = true // A Lâmpada está ok

function quebrar() {// Reprodizindo um arquivo de áudio no JS
    if (lampada == true) {
    // Classe de áudio:
    let som = new Audio() 
    som.src = "sound/glassbreaking.wav" 
    som.play()
    
    document.getElementById('lamp').src="img/broken.jpg"
    lampada = false 
    } else {

    }
}

function onoff() {
    if (chave === false && lampada === true) {
        document.getElementById('Interruptor').src="img/swon.png"
        chave = true
        document.getElementById('lamp').src="img/on.jpg"
    } else if (lampada === true){
        document.getElementById('Interruptor').src="img/swoff.png"
        chave = false
        document.getElementById('lamp').src="img/off.jpg"
    } 
}