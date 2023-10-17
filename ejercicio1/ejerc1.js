function separaPalabras(entrada, separador) {
    return entrada.split(separador);
}

function giraPalabras(palabra) {
    return palabra.split("").reverse().join("");
}


  while (true) {

    const texto = prompt("Escribe una frase o ESC para finalizar: ");
   

    if (texto === "ESC") {
      break;
    }

console.log("Texto: ", texto);
   const palabras=separaPalabras(texto, " ");

   const palabrasInvertidas = palabras.map(giraPalabras);

   const fraseInvertida = palabrasInvertidas.join(" ");


console.log("Texto invertido:", fraseInvertida);
}

console.log("Fin del programa.");



