/**
 * 이진트리 넓이우선탐색(BFS)
 *
 * dfs는 스택을 활용하고, bfs는 큐를 활용한다.
 *
 *      1
 *     /\
 *   2   3
 *  /\  /\
 * 4 5 6 7
 *
 *
 * <-<-<-<-<-<
 * 1
 * <-<-<-<-<-<
 *
 * 1 - 1을 빼고 1과 연결된 정점 2, 3 삽입
 * <-<-<-<-<-<
 * 2 3
 * <-<-<-<-<-<
 *
 * 2 - 2를 빼고 2와 연결된 정점 4, 5 삽입
 * <-<-<-<-<-<
 * 3 4 5
 * <-<-<-<-<-<
 *
 * 3 - 3을 빼고 3과 연결된 정점 6, 7 삼입
 * <-<-<-<-<-<
 * 4 5 6 7
 * <-<-<-<-<-<
 * 4 5 6 7 차례로 뺌
 *
 */

const solution = () => {
  let answer = '';
  let queue = [];
  queue.push(1);
  while (queue.length) {
    console.log(queue);
    let v = queue.shift();
    answer += v + ' ';
    for (const nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
      console.log('nv', nv);
    }
  }
  return answer;
};

console.log(solution());
