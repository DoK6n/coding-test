/**@param {number} k 피로도 @param {number[][]} dungeons 탐험 가능한 던전들*/
function solution(k, dungeons) {
  const answer = [];
  const visitedDungeons = dungeons.map(v => false);

  const dfs = (count, currentFatiguePoint) => {
    answer.push(count); // 탐험 가능한 던전 수
    for (let i = 0, length = dungeons.length; i < length; i++) {
      let currentDungeon = dungeons[i]; // 현재 선택된 던전
      if (currentFatiguePoint >= currentDungeon[0] && !visitedDungeons[i]) {
        // 현재 피로도와 선택된 던전 최소 파로도 비교
        visitedDungeons[i] = true;
        dfs(count + 1, currentFatiguePoint - currentDungeon[1]); // 카운트 추가, 현재 피로도 - 선택된 던전 소모 피로도
        visitedDungeons[i] = false;
      }
    }
  };
  dfs(0, k);

  return Math.max(...answer);
}

// console.log(
//   solution(80, [
//     [80, 20],
//     [50, 40],
//     [30, 10],
//   ]),
// );

function solution2(k, dungeons) {
  const filtered = dungeons.slice().filter(v => v[0] <= k);
  let answer = 0;
  for (let i = 0; i < filtered.length; i++) {
    const subAnswer = solution2(
      k - filtered[i][1],
      filtered.filter((_, j) => i !== j),
    );
    if (subAnswer + 1 > answer) answer = subAnswer + 1;
  }
  return answer;
}
// console.log(
//   solution2(80, [
//     [80, 20],
//     [50, 40],
//     [30, 10],
//   ]),
// );

function solution3(k, dungeons) {
  if (dungeons.length <= 0) return 0;

  let maxDungeons = 0;
  for (let i = 0; i < dungeons.length; i++) {
    if (k >= dungeons[i][0]) {
      let n = solution3(k - dungeons[i][1], dungeons.slice(0, i).concat(dungeons.slice(i + 1)));
      if (n + 1 > maxDungeons) {
        maxDungeons = n + 1;
      }

      if (maxDungeons >= dungeons.length) return maxDungeons;
    }
  }

  return maxDungeons;
}
// console.log(
//   solution3(80, [
//     [80, 20],
//     [50, 40],
//     [30, 10],
//   ]),
// );
