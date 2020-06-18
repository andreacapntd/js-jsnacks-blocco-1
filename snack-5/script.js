//Nella pagina ci sono due input(num1, num2) e una select con options(somma,sottrai,moltiplica,dividi).
//Al click su un bottone, il programma inserisce in un p#result il risultato dell'operazione scelta.
//N.B. trascura pure i controlli!


document.getElementById('btn').addEventListener("click", function () {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var operation = document.getElementById("operazioni").value;
  var numTotale;
  if (operation == "Somma") {
    numTotale = num1 + num2;
    document.getElementById("result").innerHTML = "Il risultato è " + numTotale;
  } else if (operation == "Sottrai") {
    numTotale = num1 - num2;
    document.getElementById("result").innerHTML = "Il risultato è " + numTotale;
  } else if (operation == "Moltiplica") {
    numTotale = num1 * num2;
    document.getElementById("result").innerHTML = "Il risultato è " + numTotale;
  } else if (operation == "Dividi") {
    numTotale = num1 / num2;
    document.getElementById("result").innerHTML = "Il risultato è " + numTotale;
  }
});
