/*****************************************************************
 *  Autor: Samuel Lapeira Pérez
 *  Curso: 1ºDaw
 *  Tarea: Portfolio Js
 *
 *****************************************************************/

document.getElementById('calcularBoton').addEventListener('click', tiposTriangulo);

function tiposTriangulo() {
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = "";

    const ladoA = document.getElementById('ladoA').value;
    const ladoB = document.getElementById('ladoB').value;
    const ladoC = document.getElementById('ladoC').value;

    const ladoANum = parseFloat(ladoA);
    const ladoBNum = parseFloat(ladoB);
    const ladoCNum = parseFloat(ladoC);

    if (!validarFormulario(ladoA, ladoB, ladoC)) return;

    let tipoTriangulo;

    if (ladoANum === ladoBNum && ladoBNum === ladoCNum) {
        tipoTriangulo = 'Equilátero';
    } else if (ladoANum === ladoBNum || ladoANum === ladoCNum || ladoBNum === ladoCNum) {
        tipoTriangulo = 'Isósceles';
    } else {
        tipoTriangulo = 'Escaleno';
    }

    resultadoElemento.innerHTML = "El triángulo es: " + tipoTriangulo;
}

function validarFormulario() {
    let correcto = true;

    const ladoA = document.getElementById('ladoA').value;
    const ladoB = document.getElementById('ladoB').value;
    const ladoC = document.getElementById('ladoC').value;

    const numero = /^[0-9]+(\.[0-9]+)?$/;

    // Lado A
    if (!numero.test(ladoA) || parseFloat(ladoA) <= 0) {
        document.getElementById('errorLadoA').textContent = "El campo lado A no puede estar vacío, ser menor o igual a cero, o no ser un número.";
        correcto = false;
    } else {
        document.getElementById('errorLadoA').textContent = "";
    }

    // Lado B
    if (!numero.test(ladoB) || parseFloat(ladoB) <= 0) {
        document.getElementById('errorLadoB').textContent = "El campo lado B no puede estar vacío, ser menor o igual a cero, o no ser un número.";
        correcto = false;
    } else {
        document.getElementById('errorLadoB').textContent = "";
    }

    // Lado C
    if (!numero.test(ladoC) || parseFloat(ladoC) <= 0) {
        document.getElementById('errorLadoC').textContent = "El campo lado C no puede estar vacío, ser menor o igual a cero, o no ser un número.";
        correcto = false;
    } else {
        document.getElementById('errorLadoC').textContent = "";
    }

    return correcto;
}

function resetear() {
    document.getElementById("ladoA").value = "";
    document.getElementById("ladoB").value = "";
    document.getElementById("ladoC").value = "";
    document.getElementById("errorLadoA").textContent = "";
    document.getElementById("errorLadoB").textContent = "";
    document.getElementById("errorLadoC").textContent = "";
    document.getElementById("resultado").textContent = "";
}


document.getElementById('calcularBoton').addEventListener('click', tiposTriangulo);

function tiposTriangulo() {
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = "";

    const ladoA = document.getElementById('ladoA').value;
    const ladoB = document.getElementById('ladoB').value;
    const ladoC = document.getElementById('ladoC').value;

    const ladoANum = parseFloat(ladoA);
    const ladoBNum = parseFloat(ladoB);
    const ladoCNum = parseFloat(ladoC);

    if (!validarFormulario(ladoA, ladoB, ladoC)) return;

    let tipoTriangulo;

    if (ladoANum === ladoBNum && ladoBNum === ladoCNum) {
        tipoTriangulo = 'Equilátero';
    } else if (ladoANum === ladoBNum || ladoANum === ladoCNum || ladoBNum === ladoCNum) {
        tipoTriangulo = 'Isósceles';
    } else {
        tipoTriangulo = 'Escaleno';
    }

    resultadoElemento.innerHTML = "El triángulo es: " + tipoTriangulo;
}

function validarFormulario(ladoA, ladoB, ladoC) {
    let correcto = true;
    const numero = /^[0-9]+(\.[0-9]+)?$/;

    correcto = validarLado(ladoA, 'errorLadoA', numero) && correcto;
    correcto = validarLado(ladoB, 'errorLadoB', numero) && correcto;
    correcto = validarLado(ladoC, 'errorLadoC', numero) && correcto;

    return correcto;
}

function validarLado(lado, errorId, regex) {
    const errorElemento = document.getElementById(errorId);
    if (!regex.test(lado) || parseFloat(lado) <= 0) {
        errorElemento.textContent = `El campo ${errorId.replace('error', '')} no puede estar vacío, ser menor o igual a cero, o no ser un número.`;
        return false;
    } else {
        errorElemento.textContent = "";
        return true;
    }
}

function resetear() {
    document.getElementById("ladoA").value = "";
    document.getElementById("ladoB").value = "";
    document.getElementById("ladoC").value = "";
    document.getElementById("errorLadoA").textContent = "";
    document.getElementById("errorLadoB").textContent = "";
    document.getElementById("errorLadoC").textContent = "";
    document.getElementById("resultado").textContent = "";
}

