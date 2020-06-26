// Stampa le potenze di 2 fino a 1000.

for (var i = 2; i < 1000; i=i*2) {
  console.log(i);
}

console.log("------------------");

var numero = 1;
var exp = 1;

while (numero < 1000) {
  console.log(numero);
  numero = 2**exp;
  exp++;
}
