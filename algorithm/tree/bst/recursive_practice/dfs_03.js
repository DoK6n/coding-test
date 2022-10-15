/**
  철수는 그의 바둑이들을 데리고 시장에 가려고 한다. 그런데 그의 트럭은 C킬로그램 넘게 태
  울수가 없다. 철수는 C를 넘지 않으면서 그의 바둑이들을 가장 무겁게 태우고 싶다.
  N마리의 바둑이와 각 바둑이의 무게 W가 주어지면, 철수가 트럭에 태울 수 있는 가장 무거운
  무게를 구하는 프로그램을 작성하세요.
▣ 입력설명
  첫 번째 줄에 자연수 C(1<=C<=100,000,000)와 N(1<=N<=30)이 주어집니다.
  둘째 줄부터 N마리 바둑이의 무게가 주어진다.
▣ 출력설명
  첫 번째 줄에 가장 무거운 무게를 출력한다.
▣ 입력예제 1
  259
  [ 81, 58, 42, 33, 61 ]
▣ 출력예제 1
  242
 */

// 트럭의 무게제한을 넘지 않고 가장 무겁게 태움 -> 값이 C 보다 작으면서 arr의 부분집합의 합이 가장 큰 경우
/**
 * dfs(level, sum) : 재귀하여 노드를 탐색하며 탐색한 노드들의 합을 누적시켜 answer에 저장
 * 
 * dfs(level + 1, sum + arr[level]) : 다음 노드가 포함된 경우 -> sum값에 포함될 노드의 값을 누적하고 탐색
 * dfs(level + 1, sum) : 다음 노드가 미포함된 경우 -> 다음 노드를 누적하지 않고 현재 누계값을 그대로 두고 탐색
 *         81
 *        o/\x
 *      58   58
 *    o/\x
 *   42 42
 *  33
 * 61

/**
 * @param {number} c
 * @param {number[]} arr
 */
const solution = (c, arr) => {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  arr.sort((a, b) => b - a);

  const dfs = (l, sum) => {
    if (sum > c || sum < answer) return; // 더이상 불필요한 탐색 X

    if (l === n) {
      answer = Math.max(answer, sum); // 누계값 answer와 현재까지 노드의 총 합을 비교
      console.log(sum);
    } else {
      dfs(l + 1, sum + arr[l]); // 다음 노드가 포함되는 경우 탐색
      dfs(l + 1, sum); // 다음 노드가 포함되지 않는 경우의 탐색
    }
  };
  dfs(0, 0);
  return answer;
};

console.log(solution(259, [81, 58, 42, 33, 61]));
