// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var gatsby = ["Califano", "Lapo", "Siffredi", "Richards"];

var nomeUtente = prompt("Inserisci il tuo nome");

var trovato = false;

for (var i = 0; i < gatsby.length && !trovato; i++) {
  if (nomeUtente == gatsby[i]) {
    trovato= true;
  }
}

if (trovato) {
  console.log("Puoi partecipare");
} else {
  console.log("Non puoi partecipare");
}
