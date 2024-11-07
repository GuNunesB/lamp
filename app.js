/**
 * Simulador de lâmpada
 * @author Gustavo Nunes Bispo
 */

function quebrar() {
    document.getElementById('lamp_off').src="img/broken.jpg"
    // Reprodizando um arquivo de áudio no JS
    // Classe de áudio:
    let som = new Audio() 
    som.src = "sound/glassbreaking.wav" 
    som.play()
}