/*****************************************************************
 *  Autor: Samuel Lapeira Pérez
 *  Curso: 1ºDaw
 *  Tarea: Portfolio Js
 *
 *****************************************************************/


document.getElementById('calcularBoton').addEventListener('click', calcularCircunferencia);

function calcularCircunferencia(){
    let radio = parseFloat(document.getElementById('radio').value);
    let pi = parseFloat(3.141592) ;
    let area = pi * (radio*radio) ;
    let volumen  = (4 / 3) * pi *(radio*radio*radio);
    let longitud = 2 * pi * radio ;
    
    document.getElementById('resultado').textContent = "";

    if (!validarFormulario()) { return; }

    if(radio>0){
    document.getElementById('resultado').innerHTML = 'Longitud circunferencia: ' + longitud + 'cm<br>' +
                                                          'Área del círculo: ' + area + 'cm\u00B2<br>' +
                                                          'Volumen esfera: ' + volumen+'cm\u00B3';
    }
};

function validarFormulario() {
    let correcto = true;
    let radio = document.getElementById("radio").value;
    let errorRadio = document.getElementById("errorRadio");

    if (radio === "" || radio <= 0) {
        errorRadio.textContent = "El campo radio no puede estar vacío o ser menor o igual a cero.";
        correcto = false;
    } else {
        errorRadio.textContent = "";
    }

    return correcto;
}

function resetear() {
    document.getElementById("radio").value = "";
    document.getElementById("errorRadio").textContent = "";
}

