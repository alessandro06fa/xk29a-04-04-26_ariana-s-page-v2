const fechaBoton = new Date("March 28, 2026 00:00:00 GMT-0500")
const btn = document.getElementById("enterBtn")

if(btn){

btn.onclick = () => {

const sound = document.getElementById("clickSound")
sound.volume = 0.3
sound.play()

setTimeout(()=>{
document.body.classList.add("fade-out")

setTimeout(()=>{
window.location.href="pagina.html"
},600)
},400)

}

}

function actualizarContador(){
const cumple = new Date("April 04, 2026 00:00:00 GMT-0500")
const ahora = new Date()

// 👉 mostrar botón desde el 28
const btn = document.getElementById("btnSorpresa")
if(btn && ahora >= fechaBoton){
btn.style.display = "inline-block"
}

actualizar("contador1",cumple,"cumple")
actualizarBarra(cumple)

}

function actualizar(id,fecha,tipo){

const ahora = new Date()
const diferencia = fecha-ahora

if(diferencia<=0){

if(tipo==="cumple"){

document.getElementById("mensajeCumple").innerText="FELIZ CUMPLEAÑOS ARIANAAAAAAAAAAAAAAAAA"

document.getElementById("gifCumple").innerHTML='<img src="images/cumple.gif">'


}

document.getElementById(id).innerText="YA LLEGÓ EL MOMENTO"

return

}

const dias = Math.floor(diferencia/(1000*60*60*24))
const horas = Math.floor((diferencia/(1000*60*60))%24)
const minutos = Math.floor((diferencia/(1000*60))%60)
const segundos = Math.floor((diferencia/1000)%60)

document.getElementById(id).innerHTML =

"<b>"+dias+"</b> días "+
"<b>"+horas+"</b> horas "+
"<b>"+minutos+"</b> minutos "+
"<b>"+segundos+"</b> segundos"

}

setInterval(actualizarContador,1000)

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

function playRandom(){

let random
do{
random = Math.floor(Math.random()*playlist.length)
}while(bgMusic.src.includes(playlist[random]))

bgMusic.src = playlist[random]
bgMusic.volume = 0.4

bgMusic.play().catch(() => {
document.addEventListener("click", startMusicOnce)
})

}

function startMusicOnce(){
bgMusic.play()
document.removeEventListener("click", startMusicOnce)
}

bgMusic.addEventListener("ended",playRandom)

window.addEventListener("load", playRandom)

function actualizarBarra(fecha){

const inicio = new Date("January 1, 2025 00:00:00 GMT-0500")

const ahora = new Date()

const total = fecha - inicio

const progreso = ahora - inicio

let porcentaje = (progreso/total)*100

const faltante = fecha - ahora

const sieteDias = 7*24*60*60*1000

if(faltante <= sieteDias){

document.getElementById("barraProgreso")
.classList.add("barra-dorada")

}

if(porcentaje<0) porcentaje = 0
if(porcentaje>100) porcentaje = 100

document.getElementById("barraProgreso").style.width = porcentaje+"%"

document.getElementById("porcentajeProgreso").innerText =
Math.floor(porcentaje)+"%"

}

const inicio = new Date("January 1, 2025 00:00:00 GMT-0500")

const ahora = new Date()

const total = fecha - inicio

const progreso = ahora - inicio

let porcentaje = (progreso/total)*100

if(porcentaje>100) porcentaje=100

document.getElementById("barraProgreso").style.width = porcentaje+"%"

document.addEventListener("DOMContentLoaded", () => {

const btnSorpresa = document.getElementById("btnSorpresa")

if(btnSorpresa){
btnSorpresa.onclick = () => {
window.location.href = "adviento.html"
}
}

})