/** @param {Array<[number, number]>} sizes */
function solution(sizes) {
  return sizes
    .map(([w, h]) => (w < h ? [h, w] : [w, h]))
    .reduce(
      (maxSize, [w, h]) => {
        if (w > maxSize[0]) maxSize[0] = w;
        if (h > maxSize[1]) maxSize[1] = h;
        return maxSize;
      },
      [0, 0],
    )
    .reduce((a, v) => a * v);
}

const case1 = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]; // 4000

const case2 = [
  [50, 60],
  [70, 30],
  [30, 60],
  [40, 80],
]; // 4000

const case3 = [
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
]; // 120

const case4 = [
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
]; // 133

console.log(solution(case1));
console.log(solution(case2));
console.log(solution(case3));
console.log(solution(case4));
