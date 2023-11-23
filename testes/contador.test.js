const contador = require('../funcoes/contador.js');

test('Conta inteiros corretamente', () => {
  expect(contador(0, 10)).toBe('Existem 11 valores inteiros entre 0 e 10.');
});



test('Conta inteiros para N igual a zero', () => {
  expect(contador(-5, 0)).toBe('Existem 6 valores inteiros entre -5 e 0.');
});