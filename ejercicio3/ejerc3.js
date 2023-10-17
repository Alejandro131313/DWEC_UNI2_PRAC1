const equipos = [
  "Alavés","Athletic", "Alemeria","At. Madrid","Barcelona","Sevilla", "Betis","Cadiz","Celta","Getafe","Girona","Granada","Las Palmas","Mallorca","Osasuna","Rayo","Real Madrid","Real Sociedad","Valencia","Villareal"];
const SIMBOLO = ["1", "X", "2"];

  function generaSimbolo() {
    const indice = Math.floor(Math.random() * 3);
    return SIMBOLO[indice];}
  


  function muestraEquipos() {
    console.log("Equipos de la temporada:");
    for (let i = 0; i < equipos.length; i++) {
      console.log(i + ": " + equipos[i]);
    }}
  



  function generaResultados(equipos) {
    const quinielas = [];
    for (let i = 0; i < equipos.length; i++) {
      quinielas[i] = [];
      for (let j = 0; j < equipos.length; j++) {
        if (i !== j) {
          quinielas[i][j] = generaSimbolo();
      } else {
          quinielas[i][j] = "-";
        }
      }}
    return quinielas;
  }
  
  function quinielasTemporada(equipos) {
    muestraEquipos(equipos);
  
    const quinielas = generaResultados(equipos);
  
    console.log("Tabla de quinielas:");
  
    for (let i = 0; i < equipos.length; i++) {
      for (let j = 0; j < equipos.length; j++) {
      if (i !== j) {
      console.log(equipos[i] + " vs " + equipos[j] + " - " + quinielas[i][j]);
      }}}}


  function muestraDatos(equipos, quinielas) {
    while (true) {
    console.log("Resultados de un partido: ");
    const equipoLocal = prompt("Equipo local: ");
    const equipoVisitante = prompt("Equipo visitante: ");
    const local = equipos.indexOf(equipoLocal);
    const visitante = equipos.indexOf(equipoVisitante);
  
    if (local !== -1 && visitante !== -1) {
        console.log(equipoLocal + " vs " + equipoVisitante + " - " + quinielas[local][visitante]);
     } else {
        console.log("Introduce equipos válidos.");
     }
  
    const continuar = prompt("¿Desea realizar una nueva consulta? (SI/NO): ");
    if (continuar.toLowerCase() !== "si") {
        console.log("Fin del programa.");
        break;
    }
    }
  }
  
  quinielasTemporada(equipos);
  muestraDatos(equipos, generaResultados(equipos));