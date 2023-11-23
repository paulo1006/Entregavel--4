function fibonacci(n) {
  if (n > 100 || n < 0) {
    return "O número deve ser maior que 0 e menor que 100.";
  } else {
    var str = "0 1";
    var a = 0;
    var b = 1;

    for (var i = 2; i < n; i++) {
      var c = a + b;
      str += " " + c;
      a = b;
      b = c;
    }

    return str;
  }
}

module.exports = fibonacci;
