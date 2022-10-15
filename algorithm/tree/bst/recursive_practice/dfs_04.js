/**
최대점수 구하기
  이번 정보올림피아드대회에서 좋은 성적을 내기 위하여 현수는 선생님이 주신 N개의 문제를 풀려고 합니다.
  각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 됩니다.
  제한시간 M안에 N개의 문제 중 최대점수를 얻을 수 있도록 해야 합니다.
  (해당문제는 해당시간이 걸리면 푸는 걸로 간주한다, 한 유형당 한개만 풀 수 있습니다.)

입력 설명
  첫 번째 줄에 문제의 개수N(1<=N<=50)과 제한 시간 M(10<=M<=300)이 주어집니다.
  두 번째 줄부터 N줄에 걸쳐 문제를 풀었을 때의 점수와 푸는데 걸리는 시간이 주어집니다.

출력 설명
  첫 번째 줄에 제한 시간안에 얻을 수 있는 최대 점수를 출력합니다.

입력
  5 20

  10 5
  25 12
  15 8
  6 3
  7 4

출력
  41
  */

/**
 * @param {number} m 제한 시간
 * @param {number[]} points 점수 (노드)
 * @param {number[]} times 걸리는 시간 (간선 가중치)
 * @returns {number}
 */
const solution = (m, points, times) => {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = points.length; // 문제 갯수

  const problem = Array.from({ length: n }, () => [0, 0]).map((_, i) => [points[i], times[i]]);

  problem.sort((a, b) => b[0] - a[0]);

  const dfs = (lv, sum, time) => {
    if (time > m) return; // 제한시간 넘어가면 리턴

    if (lv === n) {
      if (answer > sum) return; // 최대값 이미 구했으면 리턴

      answer = Math.max(sum, answer);
    } else {
      dfs(lv + 1, sum + problem[lv][0], time + problem[lv][1]);
      dfs(lv + 1, sum, time);
    }
  };
  dfs(0, 0, 0);
  return answer;
};

console.log(solution(20, [10, 25, 15, 6, 7], [5, 12, 8, 3, 4]));
