document.getElementById("caja").focus();
var resultsArea = document.getElementById("caja");
var resultsTitle = document.getElementById("resultsTitle");
var divNotFound = document.getElementById("notFound");
var copyResultButton = document.getElementById("copy") 
function checkRegEx(string) {
    return /^[a-z\s]*$/.test(string);
    
  }


function encriptar (){
    var texto = document.querySelector("#caja").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".textoSalida").value = textoCifrado;
    document.querySelector("#caja").value;
    
    if (resultsArea.value.length == 0) {
        alert("El texto debe contener al menos una letra");
        return false;
      }
      if (!checkRegEx(texto)) {
        alert("El texto debe contener solo letras minúsculas sin acentos");
        return false;
      } else {
        return true;
      }
    }
    
  
var boton1 = document.querySelector("#btn-encriptar"); boton1.onclick = encriptar;

    function desencriptar (){ var texto = document.querySelector("#caja").value;
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".textoSalida").value = textoCifrado;
    document.querySelector("#caja").value;
}

var boton2 = document.querySelector("#btn-desencriptar"); boton2.onclick = desencriptar;

