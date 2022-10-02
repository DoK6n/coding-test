/**
  패턴은 어처피 반복되기 때문에 굳이~ 위 방법처럼 반복한걸 만들 필요 없음
  0부터 패턴 마지막 인덱스까지만 반복해서 체크만 해주면 됨
  이를 위해 나머지값을 활용 .ex) 1%5=1, 2%5=2, 3%5=3, 4%5=4, 5%5=0, 6%5=1, 7%5=2 ...
  answer == user[i % user.length] -> 정답배열의 인덱스를 유저의 패턴배열만큼 나눈 나머지와 정답을 비교
  */

/**
 * @param {number[]} pattern
 * @param {number[]} answers
 * @return {number}
 */
const answerCounter = (pattern, answers) =>
  answers.reduce(
    (count, answer, i) => (answer === pattern[i % pattern.length] ? count + 1 : count),
    0,
  );

/**@param {number[] answers} */
function solution(answers) {
  let ine = [1, 2, 3, 4, 5];
  let lilpa = [2, 1, 2, 3, 2, 4, 2, 5];
  let gosegu = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const counts = [
    answerCounter(ine, answers),
    answerCounter(lilpa, answers),
    answerCounter(gosegu, answers),
  ];
  const maxCount = Math.max(...counts);

  return counts.map((v, i) => (v === maxCount ? i + 1 : null)).filter(v => v !== null);
}
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
console.log(solution([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));

/**
 *  # 다른 사람 풀이들
 *
 *
 *
 *
 */
function solution2(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}

function solution3(answers) {
  var answer = [];
  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == man1[i % man1.length]) count[0]++;
    if (answers[i] == man2[i % man2.length]) count[1]++;
    if (answers[i] == man3[i % man3.length]) count[2]++;
  }

  const max = Math.max(count[0], count[1], count[2]);
  for (let i = 0; i < count.length; i++) {
    if (max == count[i]) answer.push(i + 1);
  }

  return answer;
}
