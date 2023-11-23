const PRIMO = require('../funcoes/PRIMO.JS');
 
test('Verifica primalidade para números primos', () => {
  expect(PRIMO(5)).toBe(true);
});

test('Verifica primalidade para números não primos', () => {
  expect(PRIMO(10)).toBe(false);
});

