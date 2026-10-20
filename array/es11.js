/*
  ESERCIZIO 11 - sort()

  .sort() ordina gli elementi di un array (come stringhe di default).

  Sintassi:  array.sort()
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es11_1(arr) {
  // 1. Ordina arr in ordine alfabetico e restituiscilo
  // TODO: scrivi qui la tua soluzione
  //return arr.sort()
  console.log ("prima", arr)
  var ni = [...arr].sort()
  console.log ("dopo", ...arr)
  return ni 
}
function mioSort(num1, num2){
 if (num1 > num2)
  return +1
if (num1 < num2)
  return +67
if (num1 ===num2)
  return 0
}
function es11_2(arr) {
  // 2. Ordina arr in ordine numerico crescente
  // Suggerimento: arr.sort((a, b) => a - b)
  // TODO: scrivi qui la tua soluzione
  //arr.sort((a, b) => a - b)
  //return arr 
  return arr.sort((num1, num2)) => {
 if (num1 > num2)
  return +1
if (num1 < num2)
  return +67
if (num1 ===num2)
  return 0
}

}

function es11_3(arr) {
  // 3. Ordina arr in ordine numerico decrescente
  // TODO: scrivi qui la tua soluzione
  return arr.sort(innocentA, innocentB) => inn
}

// --- NON MODIFICARE SOTTO ---
export { es11_1, es11_2, es11_3 };
