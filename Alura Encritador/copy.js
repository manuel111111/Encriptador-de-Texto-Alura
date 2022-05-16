var Mensaje = document.querySelector("#caja");
var Codificar = document.querySelector("#btn-codificar");
var Descoficar = document.querySelector("#btn-descodificar");
var Copiar = document.querySelector("#copy");
var Resultado = document.querySelector("#msg");
Mensaje.focus();


function copiarTexto(){
    var resultado = Resultado.value;
    navigator.clipboard.writeText(resultado);
    Resultado.select();
}

Copiar.onclick = copiarTexto;


