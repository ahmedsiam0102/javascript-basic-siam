/*
  ESERCIZIO RIASSUNTIVO 3 - Numeri pari

  Dato l'array [3, 8, 12, 5, 20, 7, 14]:
  - estrai solo i numeri pari (filter)
  - raddoppia ogni numero pari trovato (map)
  - restituisci il nuovo array

  Risultato: [16, 24, 40, 28]
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---
// function numeriPari(n) {
//   return n %2==0;

// }
// function mPer2(n) {
//   return n*2;
// }
function es17() {
  const numeri = [3, 8, 12, 5, 20, 7, 14];
  // TODO: scrivi qui la tua soluzione
  // var nPari = numeri.filter(numeriPari)
  // console.log(nPari)
  // var nMoltiplicati = nPari.map(mPer2)
  // console.log(nMoltiplicati)
  // return nMoltiplicati
  return numeri.filter(n => n % 2 == 0).map(n => n * 2)

}

// --- NON MODIFICARE SOTTO ---
export { es17 };
