function generaAleatorio(min, max) {
    return Math.round(Math.random() * (max - min + 1) + min);
  }

  function generaNAleatorios(cantidad, min, max) {
    const numeros = [];
    for (let i = 0; i < cantidad; i++) {
      numeros.push(generaAleatorio(min, max));
    }
    return numeros;
  }

  function simuladorLoteria() {
    let numDecimos = prompt("Introduce el número de décimos: ");
    numDecimos = parseInt(numDecimos);

    if (isNaN(numDecimos) || numDecimos <= 0) {
        alert("Número entero y positivo");
        return;
    }

    const decimosIniciales = generaNAleatorios(numDecimos, 0, 9999);

    let intentos = 0;
    const maxIntentos = 99999;

    while (intentos < maxIntentos) {
        const numeroAleatorio = generaAleatorio(0, 9999);
        intentos++;
        if (decimosIniciales.includes(numeroAleatorio)) {
            alert("Se necesitaron "+ intentos +" intentos para encontrarlo");
            break;
        }
    }

    if (intentos === maxIntentos) {
        alert("Se han realizado numero maximo de intentos");
    }
}
simuladorLoteria();