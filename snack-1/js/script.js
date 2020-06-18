//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

var firstNumber = parseInt(prompt("Inserisci un numero"));
var secondNumber = parseInt(prompt("Inserisci un altro numero"));

if (firstNumber > secondNumber) {
  document.getElementById("snack").innerHTML = "Il numero più alto è " + firstNumber;
} else if(firstNumber < secondNumber) {
  document.getElementById("snack").innerHTML = "Il numero più alto è " + secondNumber;
} else {
  document.getElementById("snack").innerHTML = "I numeri sono uguali";
}
