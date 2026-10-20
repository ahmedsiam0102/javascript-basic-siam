/*
  ESERCIZIO 12 - map()

  .map() crea un nuovo array applicando una funzione a ogni elemento.

  Sintassi:  array.map(funzione)
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---
function moltiplicaPerDue(x) {
  return x * 2
}

function multBy10(numero) {
  return numero * 10;
}

function es12_1(arr) {
  // 1. Restituisci un nuovo array con ogni numero moltiplicato per 2
  // TODO: scrivi qui la tua soluzione
  //return arr.map(x => x*2)
  return arr.map(moltiplicaPerDue)
  [1, 2, 3, 6].map((numero) => {
    return numero * 10;
  })
  [10, 20, 30, 60]
}

function es12_2(arr) {
  // 2. Restituisci un nuovo array con ogni stringa in maiuscolo
  // TODO: scrivi qui la tua soluzione
  return arr.map(nia => nia.toUpperCase())
}

function es12_3(arr) {
  // 3. Restituisci un nuovo array con la lunghezza di ogni stringa
  // TODO: scrivi qui la tua soluzione
  return arr.map(nia)
}

// --- NON MODIFICARE SOTTO ---
export { es12_1, es12_2, es12_3 };
