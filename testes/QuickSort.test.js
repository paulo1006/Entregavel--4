const quicksort = require('../funcoes/QuickSort.js');
 
test('Ordena corretamente um array', () => {
  const arr = [100, 64, 13, 10, 1, 77, 19292];
  const sorted = quicksort(arr);
  expect(sorted).toEqual([1, 10, 13, 64, 77, 100, 19292]);
});

test('Ordena corretamente um array com valores duplicados', () => {
  const arr = [100, 64, 13, 10, 1, 77, 19292, 10, 64];
  const sorted = quicksort(arr);
  expect(sorted).toEqual([1, 10, 10, 13, 64, 64, 77, 100, 19292]);
});
