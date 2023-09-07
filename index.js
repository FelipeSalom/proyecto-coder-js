let manoJugador = "";
let min = 0;
let max = 3;
let vuelta = 0;
let manoComputadora = "";
let resultado = "";
let historial = [];
let opcionesMano = [
    {mano: "piedra", gana: "tijera", pierde: "papel"},
    {mano: "tijera", gana: "papel", pierde: "piedra"},
    {mano: "papel", gana: "piedra", pierde: "tijera"}
];
class ronda {
    constructor (vuelta, jugador, computadora, resultado) {
        this.vuelta = vuelta
        this.jugador = jugador
        this.computadora = computadora
        this.resultado = resultado
    }
}

function generarManoComputadora(min, max) {
    let opcionesComputadora =  ["piedra", "papel", "tijera"];
    min = Math.ceil(min);
    max = Math.floor(max);
    let i = Math.floor(Math.random() * (max - min) + min);
    return opcionesComputadora [i];
}
function jugarMano(i){
    let mano = document.getElementById(i).value;
    manoJugador = opcionesMano[mano];
        manoComputadora = generarManoComputadora(min, max);
        if (manoJugador.gana == manoComputadora){
            resultado = "Ganaste"
        }else if (manoJugador.pierde == manoComputadora){
            resultado = "Perdiste"
        }else {
            resultado = "Empate"
        }
        vuelta = vuelta + 1;
    let resultadoRonda = new ronda (vuelta, manoJugador.mano, manoComputadora, resultado);
    historial.push(resultadoRonda);
    console.log(historial);
}

function separarVictorias() {
    let victorias = [];
    let victoriasIndex = [];
    for (const historia of historial) {
        if (historia.resultado == "Ganaste"){
            victorias.push(historia);
            victoriasIndex.push(historial.indexOf(historia));
        }
    }
    console.log(victorias);
}
function separarEmpates() {
    let empates = [];
    let empatesIndex =[];
    for (const historia of historial) {
        if (historia.resultado == "Empate"){
            empates.push(historia);
            empatesIndex.push(historial.indexOf(historia));
        }
    }
    console.log(empates);
}
function separarPerdidas() {
    let perdidas = [];
    let pedidasIndex = [];
    for (const historia of historial) {
        if (historia.resultado == "Perdiste"){
            perdidas.push(historia);
            pedidasIndex.push(historial.indexOf(historia));
        }
    }
    console.log(perdidas);
}
function limpiarHistorial() {
    historial.splice(0, historial.length);
    console.log(historial);
}
