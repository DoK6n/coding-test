function solution(v) {
  let answer;

  function dfs(v) {
    if (v > 7) return; // return 후 다음 줄 실행
    dfs(v * 2);
    dfs(v * 2 + 1);
    console.log(v);
  }

  dfs(v);
  return answer;
}
/** 풀이 과정
   * Inorder(중위순회)
      dfs(v * 2);
      console.log(v);
      dfs(v * 2 + 1);

   * dfs(1)
   *    dfs(1*2)
   *        dfs(2*2)
   *            dfs(4*2) [x]
   *        console.log(4)
   *        dfs(4*2+1) [x]
   *    console.log(2)
   *    dfs(2*2+1)
   *        dfs(5*2) [x]
   *        console.log(5)
   *        dfs(5*2+1) [x]
   * console.log(1)
   * dfs(1*2+1)
   *    dfs(3*2)
   *        dfs(6*2) [x]
   *        console.log(6)
   *        dfs(6*2+1) [x]
   *    console.log(3)
   *    dfs(3*2+1)
   *        dfs(7*2) [x]
   *        console.log(7)
   *        dfs(7*2+1) [x]
   * 4 2 5 1 6 3 7
   */

/**
   * Preorder(전위순회)
      if (v > 7) return;
      console.log(v);
      dfs(v * 2);
      dfs(v * 2 + 1);

      1 2 4 5 3 6 7
   */

/**
 * Postorder(후위순회)
    if (v > 7) return;
    dfs(v * 2);
    dfs(v * 2 + 1);
    console.log(v);

    4 5 2 6 7 3 1
 */

solution(1);
