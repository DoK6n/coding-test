/**
 * 배열의 요소중 가장 큰 요소의 갯수
 * @param {Array} candles
 */
function birthdayCakeCandles(candles) {
  // Write your code here
  const max = Math.max(...candles);
  return candles.filter(candle => candle === max).length;
}

const result = birthdayCakeCandles([3, 2, 1, 3]);
console.log(result);
