// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

var userNumber = prompt("Inserisci un numero di quattro cifre");
var sum = 0;

for (var i = 0; i < userNumber.length; i++) {
  sum += parseInt(userNumber[i]);
}

console.log(sum);
