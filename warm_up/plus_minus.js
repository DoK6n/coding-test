function plusMinus(arr) {
  // Write your code here

  const positive = arr.filter(v => v > 0).length;
  const negative = arr.filter(v => v < 0).length;
  const zero = arr.filter(v => v === 0).length;
  const len = arr.length;

  console.log((positive / len).toFixed(6));
  console.log((negative / len).toFixed(6));
  console.log((zero / len).toFixed(6));
}

const arr1 = [1, 1, 0, -1, -1];
const arr2 = [-4, -3, -9, 0, 4, 1];

plusMinus(arr1);
