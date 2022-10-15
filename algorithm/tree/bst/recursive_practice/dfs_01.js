/**
 * 부분집합 구하기
  자연수 N, 1부터 N까지의 원소를 갖는 집합의 부분집합 모두 출력
    자연수 N(1<=N<=10)
    
    첫번째 줄부터 각 줄에 하나씩 부분집합을 아래와 같은 순서로 출력
  입력
    1
  출력
    1 2 3
    1 2
    1 3
    1
    2 3
    2
    3
 */

function solution(n) {
  let answer = [];
  let visited = Array.from({ length: n + 1 }, () => 0);

  function dfs(v) {
    if (v === n + 1) {
      let temp = '';
      for (let i = 1; i <= n; i++) {
        if (visited[i]) temp += i + ' ';
      }
      if (temp.length > 0) answer.push(temp.trim());
    } else {
      visited[v] = true;
      dfs(v + 1);
      visited[v] = false;
      dfs(v + 1);
    }
  }
  dfs(1);
  return answer;
}
/** 풀이 과정
 *          1
 *       o/   \x
 *      2      2
 *    o/\x   o/\x
 *   3   3  3   3
 *
 * n === 3
 *
 * dfs(1)
 *     [f,t,f,f]
 *     dfs(1+1)
 *          [f,t,t,f]
 *          dfs(2+1)
 *              [f,t,t,t]
 *              dfs(3+1)
 *                  answer ['1 2 3']
 *              [f,t,t,f]
 *              dfs(3+1)
 *                  answer ['1 2 3', '1 2']
 *          [f,t,f,f]
 *          dfs(2+1)
 *              [f,t,f,t]
 *              dfs(3+1)
 *                  answer ['1 2 3', '1 2', '1 3']
 *              [f,t,f,f]
 *              dfs(3+1)
 *                  answer ['1 2 3', '1 2', '1 3', '1']
 *    [f,f,f,f]
 *    dfs(1+1)
 *        [f,f,t,f]
 *        dfs(2+1)
 *            [f,f,t,t]
 *            dfs(3+1)
 *                  answer ['1 2 3', '1 2', '1 3', '1', '2 3']
 *            [f,f,t,f]
 *            dfs(3+1)
 *                  answer ['1 2 3', '1 2', '1 3', '1', '2 3', '2']
 *        [f,f,f,f]
 *        dfs(2+1)
 *            [f,f,f,t]
 *            dfs(3+1)
 *                  answer ['1 2 3', '1 2', '1 3', '1', '2 3', '2', '3']
 *
 * return answer
 */

console.log(solution(3));
