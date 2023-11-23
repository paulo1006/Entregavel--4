function MDC(n1, n2) {
  while (n2 !== 0) {
    const aux = n2;
    n2 = n1 % n2;
    n1 = aux;
  }
  return n1;
}

 module.exports = MDC;

 
