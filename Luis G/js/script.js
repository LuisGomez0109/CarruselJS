const horaEl        = document.querySelector("#hora");
const minutoEl      = document.querySelector("#minuto")
const segundoEl     = document.querySelector("#segundo")
const ampmEl        = document.querySelector("#ampm")
const fechaEl       = document.querySelector("#fecha")
const fowardEl       = document.querySelector("#foward")
const backEl          = document.querySelector("#back")

let contador = 0;


addEventListener("DOMContentLoaded",()=>{
    mostrarFecha()
    mostrarHora()
    setTimeout(()=>{
        cambiarFondoAutomatico(1)
    },10000)
})
function mostrarFecha(){
    const aMes=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Sectiembre','Octubre','Noviembre','Diciembre'] 
    let anio = new Date().getFullYear()
    let mes = new Date().getMonth() 
    let dia = new Date().getDate()

    fechaEl.innerText=`${dia} de ${aMes[mes]} del ${anio}`
}

function mostrarHora(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
   
    let ampm = "AM"
    if(h>12){
        h=h-12
        ampm="PM"
    }
    /*h = h < 10 ? "0" + h : h*/
    if(h<10){
        h="0"+h
    }
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s
    horaEl.innerText=h
    minutoEl.innerText=m
    segundoEl.innerText=s
    ampmEl.innerText=ampm
    setTimeout(()=>{
        mostrarHora()
    },1000)
}

function cambiarFondo(img){
    document.body.style.backgroundImage=`url(assets/${img})`;
}


/* FLECHA DERECHA*/
fowardEl.addEventListener("click", incrementarContador);
function incrementarContador() {
    contador++;
    if(contador>7)contador=0
    const aFondos=['fondo1.avif','fondo2.avif','fondo3.avif','fondo4.avif','fondo5.avif','fondo6.avif','fondo7.avif','fondo8.avif'];
    document.body.style.backgroundImage=`url(assets/${aFondos[contador]})`;
}

/* FLECHA IZQ*/
backEl.addEventListener("click", ReducirContador);
function ReducirContador() {
    contador--;
    if(contador<0)contador=7
    const aFondos=['fondo1.avif','fondo2.avif','fondo3.avif','fondo4.avif','fondo5.avif','fondo6.avif','fondo7.avif','fondo8.avif'];
    document.body.style.backgroundImage=`url(assets/${aFondos[contador]})`;
}

function cambiarFondoAutomatico(){
    contador++;
    if(contador>7)contador=1
    setTimeout(()=>{
        cambiarFondoAutomatico(contador)
     },10000)
    const aFondos=['fondo1.avif','fondo2.avif','fondo3.avif','fondo4.avif','fondo5.avif','fondo6.avif','fondo7.avif','fondo8.avif'];
    document.body.style.backgroundImage=`url(assets/${aFondos[contador]})`;
}
