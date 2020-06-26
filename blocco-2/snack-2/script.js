/*L’utente inserisce due parole in successione, con due
prompt. Il software stampa prima la parola più corta, poi la
parola più lunga.*/

var nome1 = prompt("Inserisci un nome");
var nome2 = prompt("Inserisci un altro nome");

if (nome1.length > nome2.length) {
  console.log(nome2 + " " + nome1);
} else if (nome2.length > nome1.length) {
  console.log(nome1 + " " + nome2);
} else {
  console.log("le parole sono lunghe uguali");
}
