function quicksort(arr) {
  if (arr.length <= 1) {
      return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const esq = [];
  const dir = [];
  const eq = [];

  for (let element of arr) {
      if (element < pivot) {
          esq.push(element);
      } else if (element > pivot) {
          dir.push(element);
      } else {
          eq.push(element);
      }
  }

  return quicksort(esq).concat(eq, quicksort(dir));
}

const arr = [100, 64, 13, 10, 1, 77, 19292];
const print = quicksort(arr);
console.log(print);
module.exports = quicksort;