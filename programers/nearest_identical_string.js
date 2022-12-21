// 가장 가까운 같은 글자

/**
 * @param {string} s
 * @returns {number[]}
 *
 * | s | result |
 * | :- | :- |
 * | 'banana' | [-1, -1, -1, 2, 2, 2]   |
 * | 'foobar' | [-1, -1, 1, -1, -1, -1] |
 */
function solution(s) {
  const alphabetPosition = new Map();
  const stringToArray = [...s];

  return stringToArray.map((v, i) => {
    const result =
      alphabetPosition.get(v) !== undefined ? i - alphabetPosition.get(v) : -1;
    alphabetPosition.set(v, i);
    return result;
  });
}
