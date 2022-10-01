// 다섯 개의 양의 정수를 감안할 때, 다섯 개의 정수 중 네 개를 합산하여 계산할 수 있는 최소값과 최대값을 찾으세요.
// 그런 다음 각각의 최소값과 최대값을 두 개의 공백으로 구분된 긴 정수의 한 줄로 인쇄하십시오.

/**
 * minSum = 오름차순 정렬 후 reduce로 앞에서 부터 4개의 합
 * maxSum = 오름차순 정렬 후 reduceRigth로 뒤에서 부터 4개의 합
 */
function miniMaxSum(arr) {
  // Write your code here
  const sortArr = arr.sort();
  const minSum = sortArr.reduce((acc, curr, i) => (i < 4 ? acc + curr : acc));
  const maxSum = sortArr.reduceRight((acc, curr, i) => (i > 0 ? acc + curr : acc));

  console.log(`${minSum} ${maxSum}`);
}
miniMaxSum([1, 3, 5, 7, 9]);
