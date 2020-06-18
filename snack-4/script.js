//Al click su un bottone, il programma genera un numero casuale tra 1 e 10. Se il numero è pari, toglie la classe pari da p#numero.pari.dispari altrimenti toglie la classe dispari.

document.getElementById('btn').addEventListener("click", function () {
  var number = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  document.getElementById('numero').classList.add("pari", "dispari");
  if (!(number % 2)) {
  document.getElementById('numero').classList.remove("pari");
  } else {
    document.getElementById('numero').classList.remove("dispari");
  }
})
