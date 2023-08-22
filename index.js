let manoJugador = "";
let min = 0;
let max = 3;
let contadorJugador = 0;
let contadorComputadora = 0;
let vuelta = 0;
let manoComputadora = "";
let resultado = "";
let partida = "";
let gameOver = false;

function generarManoComputadora(min, max) {
    let opcionesComputadora =  ["piedra", "papel", "tijera"];
    min = Math.ceil(min);
    max = Math.floor(max);
    let i = Math.floor(Math.random() * (max - min) + min);
    return opcionesComputadora [i];
}
function obtenerManoJugador(){
    let mano = "";
    let esOpcionValida = false;
    while (!esOpcionValida){
        mano = window.prompt("Elige Piedra, Papel o Tijera").toLowerCase();
        if (mano == "tijera" || mano == "papel" || mano == "piedra"){
            esOpcionValida = true;
        }else{
            window.alert("La opcion no es valida");
        }
    }
    return mano
}
function jugarMano(manoJugador, manoComputadora){
        manoJugador = obtenerManoJugador();
        manoComputadora = generarManoComputadora(min, max);
        if (manoJugador == "piedra" & manoComputadora == "tijera" || manoJugador == "tijera" & manoComputadora == "papel" || manoJugador == "papel" & manoComputadora == "piedra"){
            contadorJugador = contadorJugador+1
            resultado = "Ganaste"
        }else if (manoComputadora == "piedra" & manoJugador == "tijera" || manoComputadora == "tijera" & manoJugador == "papel" || manoComputadora == "papel" & manoJugador == "piedra"){
            contadorComputadora = contadorComputadora+1
            resultado = "Perdiste"
        }else {
            resultado = "Empate"
        }
        console.log("Vuelta: " + vuelta + " " + resultado);
        console.log(manoJugador);
        console.log(manoComputadora);
}
function determinarResultado(){
    if (contadorComputadora > contadorJugador){
        partida = "La Computadora Gana"
    } else if ( contadorJugador > contadorComputadora){
        partida = "El Jugador Gana"
    }else {
        partida = "La Partida es un Empate"
    }
    console.log(partida)
}
function cuatroVueltas(){
    vuelta = 0;
    for (let i = 0; i <= 3; i++){
        jugarMano(manoJugador, manoComputadora);
        vuelta = vuelta +1;
    }
    determinarResultado();
}
function elMejorDeTres (){
    vuelta = 0;
    while (gameOver == false){
        jugarMano(manoJugador, manoComputadora);
        vuelta = vuelta +1
        if (vuelta === 3){
            gameOver = true;
        }
    }
    determinarResultado();
}

