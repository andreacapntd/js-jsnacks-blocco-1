//L’utente inserisce nome e cognome nei relativi input, al click su un bottone, concatenare i valori degli input e stampare in console.


var btn = document.getElementById('btn');

btn.addEventListener("click", function () {
  var name = document.getElementById("name").value;
  var lastName = document.getElementById("lastName").value;
  var completeName = name + " " + lastName;
  console.log(completeName);
});
