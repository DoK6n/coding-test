/**
 *
 *      1
 *     /\
 *    2
 *  /\
 * 5
 *
 * @param {number} m
 * @param {number[]} coins
 * @returns
 */
const solution = (m, coins) => {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = coins.length;

  const dfs = (lv, sum) => {
    if (sum > m || lv >= answer) return;
    if (sum === m) {
      // 동전의 합이 m 일때 최소 갯수
      console.log(lv, sum);
      answer = Math.min(answer, lv);
    } else {
      for (let i = 0; i < n; i++) {
        dfs(lv + 1, sum + coins[i]);
      }
    }
  };

  dfs(0, 0);
  return answer;
};

console.log(solution(15, [1, 2, 5]));
