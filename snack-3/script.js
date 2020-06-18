//Al click su un bottone, il programma acquisisce tramite prompt un numero. Se il numero è positivo, il background di un p#colore diventa verde, se negativo rosso e se zero blu.

document.getElementById('btn').addEventListener("click", function () {
  var number = parseInt(prompt("Inserisci un numero"));
  var paragrafo = document.getElementById('colore');
  if (number >= 1) {
    paragrafo.className = "green";
  } else if (number < 0) {
    paragrafo.className = "red";
  } else {
    paragrafo.className = "blu";
  }
})
