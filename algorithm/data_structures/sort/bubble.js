/**@param {[]} array */
function bubbleSort(array) {
  const size = array.length;
  let arr = array;
  // 각 배열 요소에 액세스하는 루프
  for (let i = 0; i < size - 1; i++)
    // 배열 요소를 비교하는 루프
    for (let j = 0; j < size - i - 1; j++)
      // 인접한 두 요소 비교
      // 내림차순으로 정렬하려면 >를 <로 변경
      if (arr[j] > arr[j + 1]) {
        // 요소가 있으면 스왑합니다.
        // 의도한 순서가 아님
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
}

const arr = [-2, 45, 0, 11, -9];
bubbleSort(arr);
console.log(arr)
