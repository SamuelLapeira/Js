/*****************************************************************
 *  Autor: Samuel Lapeira Pérez
 *  Curso: 1ºDaw
 *  Tarea: Portfolio Js
 *
 *****************************************************************/
document.getElementById('calcularBoton').addEventListener('click', diviEuclides);

function diviEuclides() {
    const numeros = /^[1-9]\d*$/; 

    let dividendo = document.getElementById("dividendo").value;
    let divisor = document.getElementById("divisor").value;
    let resultado = document.getElementById("resultado");
    let errorDividendo = document.getElementById("errorDividendo");
    let errorDivisor = document.getElementById("errorDivisor");

    let cociente = 0;

    dividendo = parseInt(dividendo);
    divisor = parseInt(divisor);

    errorDividendo.textContent = "";
    errorDivisor.textContent = "";
    resultado.textContent = "";

    if (!dividendo || !divisor) {
        if (!dividendo) errorDividendo.textContent = "Por favor, introduce un dividendo.";
        if (!divisor) errorDivisor.textContent = "Por favor, introduce un divisor.";
        return;
    }

    if (!numeros.test(dividendo) || !numeros.test(divisor)) {
        if (!numeros.test(dividendo)) errorDividendo.textContent = "Por favor, introduce un número entero positivo.";
        if (!numeros.test(divisor)) errorDivisor.textContent = "Por favor, introduce un número entero positivo.";
        return;
    }

    while (dividendo >= divisor) {
        dividendo -= divisor;
        cociente++;
    }

    document.getElementById("resultado").innerHTML = "El cociente es "+cociente +", y el resto es "+dividendo ;    
}
