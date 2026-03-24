let audioActual = null
const cofres = document.querySelectorAll(".cofre")
const sonido = document.getElementById("openSound")

const hoy = new Date("2026-04-05")

function fechaPermitida(dia){

switch(dia){

case 29: return new Date("March 29, 2026 00:00:00 GMT-0500")
case 30: return new Date("March 30, 2026 00:00:00 GMT-0500")
case 31: return new Date("March 31, 2026 00:00:00 GMT-0500")
case 1: return new Date("April 1, 2026 00:00:00 GMT-0500")
case 2: return new Date("April 2, 2026 00:00:00 GMT-0500")
case 3: return new Date("April 3, 2026 00:00:00 GMT-0500")
case 4: return new Date("April 4, 2026 00:00:00 GMT-0500")

}

}

cofres.forEach(cofre => {

const dia = parseInt(cofre.dataset.dia)
const fecha = fechaPermitida(dia)

if(hoy >= fecha){
cofre.classList.add("activo")
}else{
cofre.classList.add("bloqueado")
}

cofre.onclick = () => {


cofre.classList.add("abierto")

if(cofre.classList.contains("defectuoso")){
alert("Error... no hubo ideas para ese día 😭😔")
return
}

switch(dia){

case 29:
abrirConSonido("visor.html?file=images/dia29.png")
break

case 31:
abrirConSonido("visor.html?file=images/dia31.png")
break

case 2:
abrirConSonido("   ")
break

case 3:
abrirConSonido("rompecabezas.html")
break

case 4:
abrirConSonido("https://youtu.be/Qex9pZXuTw4")
break

}

}

})

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

function abrirConSonido(ruta){

// detener audio anterior si existe
if(audioActual){
audioActual.pause()
audioActual.currentTime = 0
}

const audio = new Audio("sounds/open.mp3")
audio.volume = 0.6

audioActual = audio

let yaCambio = false

audio.play()

audio.onended = () => {
if(!yaCambio){
yaCambio = true
window.location.href = ruta
}
}

// respaldo
setTimeout(()=>{
if(!yaCambio){
yaCambio = true
window.location.href = ruta
}
},3000)

}