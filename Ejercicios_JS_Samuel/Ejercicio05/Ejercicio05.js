/*****************************************************************
 *  Autor: Samuel Lapeira Pérez
 *  Curso: 1ºDaw
 *  Tarea: Portfolio Js
 *
 *****************************************************************/

document.getElementById('calcularBoton').addEventListener('click', detectarMayusculasMinisculas);

function detectarMayusculasMinisculas() {
    const cadena = document.getElementById('cadena').value;
    const Mayusculas = /[A-Z]/.test(cadena);
    const Minusculas = /[a-z]/.test(cadena);

    if (Mayusculas && Minusculas) {
        document.getElementById('resultado').innerText = 'La cadena contiene tanto mayúsculas como minúsculas.';
    } else if (Mayusculas) {
        document.getElementById('resultado').innerText = 'La cadena contiene solo mayúsculas.';
    } else if (Minusculas) {
        document.getElementById('resultado').innerText = 'La cadena contiene solo minúsculas.';
    } else {
        document.getElementById('resultado').innerText = 'La cadena no contiene letras o está vacía.';
    }
}
