/**
 * Simulador de lâmpada
 * @author Gustavo Nunes Bispo
 */

let chave = false // O interrupitor está desligado
let lampada = true // A Lâmpada está ok

// lanterna (pré carregamento)
let stream, track
inicializarLanterna()

// pré carregamento de áudio
let som = new Audio("sound/breaking-glass.mp3")

function quebrar() {// Reprodizindo um arquivo de áudio no JS
    if (lampada == true) {
    // Classe de áudio:
    som.play()
    
    document.getElementById('lamp').src="img/broken.jpg"
    lampada = false 
    } else {

    }
}

function onoff() {
    if (chave === false) {
        document.getElementById('Interruptor').src="img/swon.png"
        chave = true
        if (lampada === true) {
            document.getElementById('lamp').src="img/on.jpg"
        }
    } else {
        document.getElementById('Interruptor').src="img/swoff.png"
        chave = false
        if (lampada === true) {
            document.getElementById('lamp').src="img/off.jpg"
        }
    } 
}

// Eventos como click (pressionado ou não) e telas touch
// Capturar os elementos (DOM)
const botao = document.getElementById('button')
const lampadaimg = document.getElementById('lamp')

// "botao.addEventListener" Manipula o evento mouse pressionado em tempo real
botao.addEventListener('mousedown', (event) => {// epressionar (e manter)
    event.preventDefault() 
    if (lampada === true && chave === false) {
        lampadaimg.src = "img/on.jpg"
    }
})

botao.addEventListener('mouseup', (event) => {// soltar o botão
    event.preventDefault()
    if (lampada === true && chave === false) {
        lampadaimg.src = "img/off.jpg"
    }
})

// "touchstart" = tocar/manter dedo na tela
botao.addEventListener('touchstart', (event) => {// epressionar (e manter)
    event.preventDefault()
    if (lampada === true && chave === false) {
        lampadaimg.src = "img/on.jpg"
    }
})

// "touchend" = deixar de pressionar a tela
botao.addEventListener('touchend', (event) => {// soltar o botão
    event.preventDefault()
    if (lampada === true && chave === false) {
        lampadaimg.src = "img/off.jpg"
    }
})

// Lanterna (torch)
async function inicializarLanterna() {

    // try-catch (tratamento de exceções)
    try {
        // Solicita acesso à câmera traseira sem exibir o vídeo
        stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" }
        })
        
        // Obtém o track do vídeo para controlar a lanterna
        track = stream.getVideoTracks()[0]
        
        // Verifica se o dispositivo suporta o uso da lanterna
        const capabilities = track.getCapabilities()
        if (!capabilities.torch) { 
            console.log("Lanterna não suportada no dispositivo.")
            return
        }
    } catch (error) {
        console.error(`Erro ao inicializar a lanterna: ${error}`)
    }
}

async function ligar() {
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: true }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
}

async function desligar() {
    
}