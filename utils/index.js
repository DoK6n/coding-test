// Math.sqrt 메모이제이션한 함수
const sqrt = arg => {
  if (!sqrt.cache) sqrt.cache = {};
  return !sqrt.cache[arg] ? (sqrt.cache[arg] = Math.sqrt(arg)) : sqrt.cache[arg];
};

// 팩토리얼
const factorial = num => (num === 1 || num === 0 ? 1 : num * factorial(num - 1));

// 메모이제이션
function memoize(callback) {
  return function () {
    const args = Array.prototype.slice.call(arguments);
    callback.cache = callback.cache || {};
    return callback.cache[args] ? callback.cache[args] : (callback.cache[args] = callback.apply(this, args));
  };
}

// 소수 판별
const isPrime = n => {
  if (n < 2) return false;
  for (let i = 2, length = sqrt(n); i <= length; i++) {
    if (n % i === 0) return false;
  }
  return true;
};
