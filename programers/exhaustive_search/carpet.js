/**@param {number} brown @param {number} yellow */
function solution(brown, yellow) {
  let sum = brown + yellow;

  for (let height = 3; height <= brown; height++) {
    // 임의의 높이로 나눌때 나머지가 없을경우만
    if (sum % height === 0) {
      let weight = Math.floor(sum) / height; // 가로길이
      // 테두리를 제외한 길이를 구해야하기 때문에 각각 -2해준뒤 곱셈 (상하, 좌우)
      if ((height - 2) * (weight - 2) === yellow) return [weight, height];
    }
  }
}
console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
