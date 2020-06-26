/*Il software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti. Esegui questo programma in due versioni, con il for
e con il while.*/

var sum = 0;

for (i = 0; i < 5; i++) {
  var numeroUtente = parseInt(prompt("Dammi un numero"));
  sum += numeroUtente;
}

console.log(sum);

//versione con while

var i = 0;
var sum = 0;

while (i < 5) {
  var numeroUtente = parseInt(prompt("Dammi un numero"));
  sum += numeroUtente;
  i++;
}

console.log(sum);
