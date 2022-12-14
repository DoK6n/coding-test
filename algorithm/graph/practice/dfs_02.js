/**
 * 미로 탐색
 *  7*7 격자판 미로 탈출 경로의 가지수 출력
 *  출발점 좌표는 (1,1), 도착점 좌표는 (7,7)
 *  1은 벽, 0은 통로
 *  상하좌우로만 이동 가능
 *  미로가 다음과 같다면 출발점에서 도착점까지 가는 경로의 가지수는 8가지
 *
 * 출 0 0 0 0 0 0
 * 0 1 1 1 1 1 0
 * 0 0 0 1 0 0 0
 * 1 1 0 1 0 1 1
 * 1 1 0 0 0 0 1
 * 1 1 0 1 1 0 0
 * 1 0 0 0 0 0 끝
 *
 */

const solution = mazeMap => {
  let answer = 0;
  const dxy = [
    { x: -1, y: 0 }, // 상
    { x: 1, y: 0 }, // 하
    { x: 0, y: -1 }, // 좌
    { x: 0, y: 1 }, // 우
  ];
  const dfs = (x, y) => {
    if (x === 6 && y === 6) answer++;
    else {
      for (let i = 0; i < 4; i++) {
        let nx = x + dxy[i].x;
        let ny = y + dxy[i].y;
        // 좌표 범위를 맵 내부로 제한, 값이 0인 경우만 통과
        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && mazeMap[nx][ny] === 0) {
          mazeMap[nx][ny] = 1; // 왔던 길 다시 되돌아 가지 않도록 1을 주어 막아줌
          dfs(nx, ny);
          mazeMap[nx][ny] = 0; // 다음 경로 찾기 위해 되돌아가야 하므로 0으로 설정
        }
      }
    }
  };
  mazeMap[0][0] = 1;
  dfs(0, 0);
  return answer;
};

const testcase1 = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];
console.log(solution(testcase1));
