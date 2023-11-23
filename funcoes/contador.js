function contador(primeiroDado, N) {
  var contador = 0;

  for (var i = primeiroDado; i <= N; i++) {
    if (i === Math.round(i)) {
      contador++;
    }
  }

  return "Existem " + contador + " valores inteiros entre " + primeiroDado + " e " + N + ".";
}


module.exports = contador;


