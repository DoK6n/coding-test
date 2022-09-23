/**
 * 다음 규칙에 따라 각 학생의 성적을 반올림
 *    등급과 다음 5의 배수의 차이가 3보다 작으면 등급을 다음 5의 배수로 반올림합니다.
 *    등급 값이 38 미만인 경우 결과는 여전히 낙제 등급이므로 반올림이 발생하지 않습니다.
 *
 * 등급 = 84에서 85로 반올림(85 - 84는 3보다 작음)
 * 등급 = 29 반올림하지 않음(결과는 40 미만)
 * 등급 = 57은 반올림하지 않음(60 - 57은 3 이상)
 *
 * Input [73, 67, 38, 33]
 * Output [75 ,67 ,40 ,33]
 *
 * Input Format
 *    첫 번째 줄에는 학생 수인 단일 정수 n이 있습니다.
 *    n개의 후속 라인의 각 라인 i에는 단일 정수 grades[i]가 포함됩니다.
 *
 * Output Format
 *    int[n]: 적절하게 반올림한 후의 등급
 *
 * 학생 1은 73을 받았고 73에서 5의 다음 배수는 75입니다. 75-73<3부터 학생의 성적은 75로 반올림됩니다.
 * 학생 2는 67을 받았고 67에서 5의 다음 배수는 70입니다. 70-67=3이므로 성적이 수정되지 않고 학생의 최종 성적은 67입니다.
 * 학생 3은 38을 받았고 38에서 5의 다음 배수는 40입니다. 40-38<3이므로 학생의 성적은 40으로 반올림됩니다.
 * 4번 학생은 33점 미만의 성적을 받았으므로 성적이 수정되지 않으며 학생의 최종 성적은 33점입니다.
 */

/**
 * @param {Number[]} grades
 * @return {Number[]}
 */
function gradingStudents(grades) {
  // Write your code here
  return grades.map(grade => {
    if (grade < 37) return grade;
    let nextMultiple = 0;
    for (let i = 0; i < 5; i++) {
      if ((grade + i) % 5 === 0) {
        nextMultiple = grade + i;
      }
    }
    return nextMultiple - grade < 3 ? nextMultiple : grade;
  });
}

// const result = gradingStudents([73, 67, 38, 33]);
const result = gradingStudents([
  80, 96, 18, 73, 78, 60, 60, 15, 45, 15, 10, 5, 46, 87, 33, 60, 14, 71, 65, 2, 5, 97, 0,
]);

console.log(result);
