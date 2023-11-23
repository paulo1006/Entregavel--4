function PRIMO(numero) {
  if (numero <= 1) {
    return false;
  }

  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}


function verificarPRIMO(x) {
  if (PRIMO(x)) {
    console.log(x + " é primo");
  } else {
    console.log(x + " não é primo");
  }
}


module.exports = PRIMO;