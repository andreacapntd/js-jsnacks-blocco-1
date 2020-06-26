//Calcola la somma e la media di 10 numeri chiesti all'utente.

var sum = 0;

for (var i = 0; i < 10; i++) {
  var numeri = parseInt(prompt("Inserisci 10 numeri"));
  sum += numeri;
}

console.log(sum);
console.log(sum/10);
