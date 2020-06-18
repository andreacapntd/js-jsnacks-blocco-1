/*Nella pagina c'è un bottone#lanciaMoneta.
Al click su un bottone, il programma genera un numero casuale (tra 0 e 9).
Se il numero è pari mostra un img con la testa della moneta.
Se è dispari mostra un'altra img con la croce della moneta.*/

var lanciaMoneta = document.getElementById("lanciaMoneta");

lanciaMoneta.addEventListener("click", function () {
  var number = Math.floor(Math.random () * 10);
  console.log(number);
  if (!(number % 2)) {
    document.getElementById("testa").className ="show";
    document.getElementById("croce").className ="hidden";
  } else if (number % 2) {
    document.getElementById("croce").className ="show";
    document.getElementById("testa").className ="hidden";
  }
})
