/**
 * 경로 탐색
 *  1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수
 *
 *  1  ↔️  2  ➡️  5
 *  ⬇️  ↙️↘️ ⬆️  ↗️
 *  3  ➡️  4
 *
 * 1에서 5는 총 6가지
 *  1 2 3 4 5
 *  1 2 5
 *  1 3 4 2 5
 *  1 3 4 5
 *  1 4 2 5
 *  1 4 5
 *
 * 첫줄 정점의 수 N(1<=N<=20), 간선의 수 M, 그 다음 M줄에 걸쳐 연결 정보가 주어진다.
 *
 * 출력
 *  총 가지 수
 *
 * 입력
 *  5 9
 *
 *  1 2
 *  1 3
 *  1 4
 *  2 1
 *  2 3
 *  2 5
 *  3 4
 *  4 2
 *  4 5
 *
 * 인접행렬
 *  0 1 2 3 4 5
 *  1   1 1 1
 *  2 1   1   1
 *  3       1
 *  4   1     1
 *  5
 *
 * 재귀함수 동작 과정
 * 1  2  3  4  5
 *
 *     dfs(1)                 : 호출된 재귀함수
 *    ⬇️  ⬇️  ⬇️                 : 아직 카운트되지 않은 방문 가능한 경로
 * -  2  3  4  5            - : 방문한 정점 체크
 *    ⬇️
 *    ⬇️
 *     dfs(2)
 * ⬇️     ⬇️     ⬇️
 * -  -  3  4  5
 *       ⬇️
 *       ⬇️
 *     dfs(3)
 *          ⬇️
 * -  -  -  4  5
 *          ⬇️
 *          ⬇️
 *     dfs(4)
 *    ⬇️        ⬇️
 * -  -  -  -  5
 *             ⬇️
 *             ⬇️
 *     dfs(5) => count += 1
 *
 * -  -  -  -  -
 *        ↩️                  : 재귀함수가 종료되고 난 다음 라인 ex) visited[i] = 0;
 *        ↩️                  : 이전 정점으로 되돌아감
 *     dfs(4)
 *    ⬇️        -           - : 카운트 완료된 경로
 * -  -  -  -  5
 *        ↩️
 *        ↩️
 *     dfs(3)
 *          -
 * -  -  -  4  5
 *        ↩️
 *        ↩️
 *     dfs(2)
 * ⬇️     -     ⬇️
 * -  -  3  4  5
 *             ⬇️
 *             ⬇️
 *     dfs(5) => count += 1
 *
 * -  -  3  4  -
 *        ↩️
 *        ↩️
 *     dfs(2)
 * ⬇️     -     -
 * -  -  3  4  5
 *        ↩️
 *        ↩️
 *     dfs(1)
 *    -  ⬇️  ⬇️
 * -  2  3  4  5
 *       ⬇️
 *       ⬇️
 * ...
 *
 *
 */

const solutionMatrix = (n, arr) => {
  let answer = 0;

  // Initialize Adjacency Matrix
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

  // Array of check the visited vertax
  let visited = Array.from({ length: n + 1 }, () => 0);
  let path = []; // 방문한 경로 출력용

  // Set Adjacency Matrix
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }
  const dfs = vertax => {
    if (vertax === n) {
      // If the vertex visited the last vertex
      answer++;
      console.log(path);
    } else {
      // Loop up to number of vertices
      for (let i = 1; i <= n; i++) {
        // 현재 정점에서 i번째 정점과 연결된 간선이 있는 경우 && 그 i번째 정점에 방문한적이 없는 경우만
        if (graph[vertax][i] === 1 && visited[i] === 0) {
          visited[i] = 1;
          path.push(i);
          dfs(i);
          visited[i] = 0; // 방문하고 되돌아올때 체크 해제
          path.pop();
        }
      }
    }
  };
  path.push(1);
  visited[1] = 1; // 1번은 방문한 상태로 시작
  dfs(1);
  // console.log(graph);
  return answer;
};

// console.log(
//   solutionMatrix(5, [
//     [1, 2],
//     [1, 3],
//     [1, 4],
//     [2, 1],
//     [2, 3],
//     [2, 5],
//     [3, 4],
//     [4, 2],
//     [4, 5],
//   ]),
// );

// 인접리스트
const solutionList = (n, arr) => {
  let answer = 0;

  let graph = Array.from(Array(n + 1), () => Array()); // [ [], [], [], [], [], [] ]
  let visited = Array.from({ length: n + 1 }, () => 0);
  let path = []; // 방문한 경로 출력용

  for (let [a, b] of arr) {
    graph[a].push(b);
  } // [ [], [ 2, 3, 4 ], [ 1, 3, 5 ], [ 4 ], [ 2, 5 ], [] ]

  const dfs = vertax => {
    if (vertax === n) {
      answer++;
      console.log(path);
    } else {
      for (let i = 0, length = graph[vertax].length; i < length; i++) {
        if (visited[graph[vertax][i]] === 0) {
          // graph[vertax][i] : 각 정점의 연결된 정점만큼만 반복시키기 위함
          visited[graph[vertax][i]] = 1;
          path.push(graph[vertax][i]);
          dfs(graph[vertax][i]);
          visited[graph[vertax][i]] = 0;
          path.pop();
        }
      }
    }
  };

  path.push(1);
  visited[1] = 1;
  dfs(1);

  return answer;
};
console.log(
  solutionList(5, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ]),
);
