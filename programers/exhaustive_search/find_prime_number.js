// 소수 판별

/**@param {number} n */
const isPrime = n => {
  if (n < 2) return false;
  for (let i = 2, length = Math.sqrt(n); i <= length; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

/**@param {Set<number>} set  @param {string[]} arr @param {string} fixed*/
const getPermutation = (set, arr, fixed) => {
  if (arr.length >= 1) {
    for (let i = 0, length = arr.length; i < length; i++) {
      let newFixed = fixed + arr[i];
      let copyArr = [...arr];
      copyArr.splice(i, 1); // 숫자를 한개씩 지움
      if (isPrime(+newFixed)) set.add(+newFixed); // number로 형변환 후 소수면 set함수에 추가함
      getPermutation(set, copyArr, newFixed);
    }
  }
};

/**@param {string} numbers */
function solution(numbers) {
  const nums = numbers.split('');
  const set = new Set();
  getPermutation(set, nums, '');
  return set.size;
}

solution('17');
// solution('011');
