let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos === 1 ) ? "intento" : "intentos" }`);
        document.getElementById("reiniciar").removeAttribute("disabled");
        //el usuario fallo
    } else {
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("P", "El numero secreto es menor");
        } else{
            asignarTextoElemento("p","El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    //Si ya sorteamos todos los numeros
    if (listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los numeros posibles");
    } else {
    //Si el numero generado esta e la lista
    if (listaNumeroSorteado.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Ingrese un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //indicarmenjaje de intervalos
    //Generar numero aleatorio
    //Inicializar el numero intentos
    condicionesIniciales();
    //Desabilitar el boton nuevo juego  
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

function limpiarCaja() {
    let valorCaja = document.querySelector("#valorUsuario").value = "";
}

condicionesIniciales()
