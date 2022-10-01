/**@param {string} n @param {number[]} lost @param {number[]} reserve} */
function solution(n, lost, reserve) {
  const clothes = Array(n).fill(1);

  lost.forEach(l => {
    clothes[l - 1] = 0;
  });

  reserve.forEach(r => {
    clothes[r - 1]++;
  });

  for (let i = 0; i < n; i++) {
    if (clothes[i] === 0 && clothes[i - 1] === 2) {
      clothes[i] = 1;
      clothes[i - 1] = 1;
    } else if (clothes[i] === 0 && clothes[i + 1] === 2) {
      clothes[i] = 1;
      clothes[i + 1] = 1;
    }
  }

  return clothes.filter(c => c > 0).length;
}

const result = solution(5, [2, 4], [1, 3, 5]);
// const result = solution(5, [2, 4], [3]);
console.log(result);
