// L'utente inserisce due numeri in successione con due prompt. Il software stampa il maggiore

var numero1 = prompt("Inserisci il primo numero");
var numero2 = prompt("Inserisci il secondo numero");

if (numero1 > numero2) {
  console.log(numero1);
} else if (numero2 > numero1) {
  console.log(numero2);
} else {
  console.log("I numeri sono uguali");
}
