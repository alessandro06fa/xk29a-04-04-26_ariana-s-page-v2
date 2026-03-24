const sonidoMove = new Audio("sounds/move.mp3")
const sonidoSuccess = new Audio("sounds/success.mp3")
const puzzle = document.getElementById("puzzle")
const mensaje = document.getElementById("mensaje")

const size = 5
let piezas = []
let seleccion = null

// crear piezas
for(let i=0;i<size*size;i++){

const pieza = document.createElement("div")
pieza.classList.add("pieza")

const x = i % size
const y = Math.floor(i / size)

pieza.style.backgroundPosition = `${x*25}% ${y*25}%`

pieza.dataset.correcto = i

piezas.push(pieza)

}

// mezclar
piezas.sort(()=>Math.random()-0.5)

// renderizar
piezas.forEach((pieza, index) => {

pieza.dataset.index = index

pieza.onclick = () => manejarClick(pieza)

puzzle.appendChild(pieza)

})

function manejarClick(pieza){

if(pieza.classList.contains("correcta")) return

if(!seleccion){
seleccion = pieza
pieza.style.outline = "2px solid red"
return
}

// intercambiar
intercambiar(seleccion, pieza)

seleccion.style.outline = "none"
seleccion = null

sonidoMove.currentTime = 0
sonidoMove.play()

verificar()

}

function intercambiar(a, b){

const temp = a.style.backgroundPosition
a.style.backgroundPosition = b.style.backgroundPosition
b.style.backgroundPosition = temp

const temp2 = a.dataset.correcto
a.dataset.correcto = b.dataset.correcto
b.dataset.correcto = temp2

}

function verificar(){

let correctas = 0

piezas.forEach((pieza, index) => {

if(parseInt(pieza.dataset.correcto) === index){
pieza.classList.add("correcta")
correctas++
}

})

if(correctas === size*size){
mensaje.innerText = "LO LOGRASTE, habla con Sapo Duque Reservado para reclamar tu premio"



}

}

const playlist = [
"music/song1.mp3",
"music/song2.mp3",
"music/song3.mp3",
"music/song4.mp3",
"music/song5.mp3",
"music/song6.mp3",
"music/song7.mp3",
"music/song8.mp3",
"music/song9.mp3",
"music/song10.mp3",
"music/song11.mp3",
"music/song12.mp3"
]

const bgMusic = new Audio()
bgMusic.volume = 0.4

function playRandom(){

let random = Math.floor(Math.random()*playlist.length)

bgMusic.src = playlist[random]
bgMusic.play()

}

// 👉 cuando termina, reproduce otra canción
bgMusic.addEventListener("ended", playRandom)

// 👉 iniciar música SOLO cuando el usuario haga click
document.addEventListener("click", () => {

if(bgMusic.paused){
playRandom()
}

}, { once: true })

function lanzarConfetti(){

for(let i=0;i<80;i++){

const conf = document.createElement("div")

conf.style.position = "fixed"
conf.style.width = "6px"
conf.style.height = "6px"
conf.style.background = "cyan"
conf.style.top = "-10px"
conf.style.left = Math.random()*100 + "vw"
conf.style.opacity = Math.random()

conf.style.transition = "transform 2s linear, opacity 2s"

document.body.appendChild(conf)

setTimeout(()=>{
conf.style.transform = `translateY(100vh)`
conf.style.opacity = 0
},50)

setTimeout(()=>{
conf.remove()
},2000)

}

}