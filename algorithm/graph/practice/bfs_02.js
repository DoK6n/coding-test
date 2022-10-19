/**
 * 송아지 찾기 (BFS: 상태트리탐색)
 *
 * 현주(S)가 잃어버린 송아지(E)를 위치추적기를 이용해 찾아야 한다.
 * 송아지(E)는 제자리에 있다.
 * S는 한번에 점프로 앞으로 1, 뒤로 1, 앞으로 5를 이동
 * S가 E까지 최소 몇 변의 점프가 필요한지 구하기.
 *
 * answer >= 1
 *
 * 풀이방법 1 - 레벨 단위로 탐색
 *
 * 레벨 0           ___5____
 *             -1/   +1|   \+5
 * 레벨 1       4       6    10
 *          -1/\+5  +1/\+5   \+5
 * 레벨 2    3  9     7 11     15
 *         /\   \+5
 * 레벨 3  2  8  (14)
 *
 * 풀이방법 2 - 거리값 배열을 이용한 탐색
 * distance[nextNode] = distance[node] + 1
 * > 거리배열에서 다음 노드은 부모노드값 + 1
 *
 *   0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
 * [           0                           ]
 *
 *
 *   0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
 * [         1 0 1       1                 ]
 * 부모노드 : 5
 * 다음노드 : 부모노드값(0) + 1
 *
 *
 *   0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
 * [       2 1 0 1     2  1               ]
 * 부모노드 : 4, 6, 10
 * 다음노드 : 부모노드값(1) + 1
 *
 *
 *   0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
 * [     3 2 1 0 1   3 2  1           3   ]
 * 부모노드 : 2, 8, 14
 * 다음노드 : 부모노드값(2) + 1
 *
 *
 * 시간복잡도는 동일하나 1번 방법이 좀더 메모리 절약됨
 *
 */

/**@param {number} s 출발점 @param {number} e 도착점*/
const solution = (s, e) => {
  let ch = new Array(10001).fill(0);
  let distance = new Array(10001).fill(0);
  let queue = [];
  ch[s] = 1;
  queue.push(s);
  distance[s] = 0;
  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return distance[x] + 1;
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        distance[nx] = distance[x] + 1;
      }
    }
  }
};

console.log('distance array', solution(5, 14));

const solutionL = (s, e) => {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  ch[s] = 1;
  let L = 0;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      for (let nx of [x - 1, x + 1, x + 5]) {
        if (nx === e) return L + 1;
        if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
          ch[nx] = 1;
          queue.push(nx);
        }
      }
    }
    L++;
  }
  return answer;
};

console.log('level', solutionL(8, 3));

const greedy = (s, e) => {
  let answer = 0;
  const move = [-1, 1, 5];

  if (e < s) {
    answer = Math.abs(e - s);
  } else {
    if (e === s) answer = 0;

    const min = Math.floor(e / 5) * move[2];
    const max = (Math.floor(e / 5) + 1) * move[2];

    console.log(min, max);

    const diff = Math.min(Math.abs(e - min), Math.abs(e - max));
    if (diff === Math.abs(e - min)) {
      answer = e - min;
    } else {
      console.log('diff', diff);
      console.log(max / move[2]);
      console.log(1 + max / move[2] + move[0] * Math.abs(e - max));
    }
  }
  return answer;
};

console.log('greedy', greedy(5, 14));
console.log('greedy', greedy(8, 3));
