//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

var request = prompt("Quanti numeri vuoi inserire?")

for (var i = 0; i < request; i++) {
  var userNumber = parseInt(prompt("Inserisci il numero"));
  var result = (userNumber ** 3);
  console.log(result);
}
