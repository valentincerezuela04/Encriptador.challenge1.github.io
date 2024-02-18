/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/


function asignarTextoElemento(elemento,texto){
	let elementoHtml = document.getElementById(elemento);
	elementoHtml.innerHTML = texto;
}

function obtenerTexto(){

    let inputElement = document.getElementById('miInput');
    let textoUsuario = inputElement.value;
    console.log('Valor guardado en la variable:',textoUsuario);
    return textoUsuario;
}
function obtenerTextoEncriptado(){

    let inputElement = document.getElementById('w3review');
    let textoUsuario = inputElement.value;
    console.log('Valor guardado en la variable desencripatador:',textoUsuario);
    return textoUsuario;
}
/*Clear seaction::*/ 
function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}
function clearImg(elementID){
    var img = document.getElementById(elementID);
    img.setAttribute('src','');
    img.style.display = 'none';
}

function encriptador() {
    var texto = obtenerTexto();
    clearBox('clear-h2');
    clearBox('clear-p');
    clearImg('clear-img');
    /*para que el texaerea se oculte y a la hora de encriptar se muestre los valores:*/ 
    document.getElementById('w3review').style.display = 'block';
    document.getElementById('copyButton').style.display = 'block';
    
    var sustituciones = {
        'o': 'ober',
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'u': 'ufat'
    };
    var textoEncriptado = [];

    for(var i =0;i<texto.length;i++){
        var sustitucion = sustituciones[texto[i]];
        if (sustitucion !== undefined) {
          textoEncriptado.push(sustitucion);
      } else {
          textoEncriptado.push(texto[i]);
      }
    }

    asignarTextoElemento('w3review', textoEncriptado.join(''));
    console.log("cadena encriptada:");
    console.log(textoEncriptado.join(''));
}

function desencriptador() {
    var texto = obtenerTexto();
    
    texto.replace(/ober/g, 'o');
    texto.replace(/enter/g, 'e');
    texto.replace(/imes/g, 'i');
    texto.replace(/ai/g, 'a');
    texto.replace(/ufat/g, 'u');
   
    asignarTextoElemento('w3review', texto);
    console.log("cadena desencriptada:");
    console.log(texto);
}

function copyClipboard() {
    var textarea = document.getElementById('w3review');

    // Seleccionar el texto dentro del textarea
    textarea.select();
    
    // Ejecutar el comando de copia
    document.execCommand('copy');
  }



// var textoEncriptado = [];

// for (var i = 0; i < texto.length; i++) {
//     if (texto[i] === "o") {
//         textoEncriptado.push("ober");
//     } else if (texto[i] === "e") {
//         textoEncriptado.push("enter");
//     } else if (texto[i] === "i") {
//         textoEncriptado.push("imes");
//     } else if (texto[i] === "a") {
//         textoEncriptado.push("ai");
//     } else if (texto[i] === "u") {
//         textoEncriptado.push("ufat");
//     } else {
//         textoEncriptado.push(texto[i]);
//     }
// }

// asignarTextoElemento('w3review', textoEncriptado.join(''));
// console.log("cadena encriptada:");
// console.log(textoEncriptado.join(''));
// }

// function encriptador(){
//     var texto = obtenerTexto();
//     for (var i = 0; i < texto.length; i++) {
//         if(texto[i] === "o"){
//             texto[i]  = "ober"; 
//         }
//         if(texto[i] === "e"){
//             texto[i] = "enter";
//             }
//         if(texto[i] === "i"){
//             texto[i] = "imes";
//             }
//         if(texto[i] === "a"){
//             texto[i] = "ai";
//             }
//         if(texto[i] === "u"){
//             texto[i] = "ufat";
//             }
        
//     }
// asignarTextoElemento('w3review',texto);
// console.log("cadena encriptada:");
// console.log(texto);

// }

