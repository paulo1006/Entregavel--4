const fibonacci = require('../funcoes/fibonacci.js');
test('Gera a sequência de Fibonacci corretamente', () => {
  expect(fibonacci(5)).toBe('0 1 1 2 3');
});



test('Lida com entrada maior que 100', () => {
  expect(fibonacci(101)).toBe('O número deve ser maior que 0 e menor que 100.');
});