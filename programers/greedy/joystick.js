/**
  # 조이스틱 상 하 조작
  1. 조이스틱을 위로 조작해 알파벳을 찾는 경우
    - '선택된 알파벳' - '알파벳A(65)'
        ex) 'A' 'C' 의 경우 'C' - 'A' = 2로, 위로 두번 조작하면 가능
  2. 처음 'A'에서 아래로 조작해 찾는 경우
    - '알파벳Z(90)' - '선택된 알파벳' + 'A to Z 이동 1회'
        ex) 'A' 'Y' 의 경우 'Y' - 'A' = '알파벳Z(90)'보다 아래로 두번 조작하는 값(90 - 89 + 1)이 더 적음
  
  알파벳 아스키코드: String.charCodeAt(index)
  최소값 비교 : Math.min()

  # 조이스틱 좌 우 조작
  커서 위치가 바뀌게 되는 경우는 총 세 가지
  1. 처음부터 쭉 오른쪽으로 가는 경우
    가장 일반적인 경우로 name.length() - 1로 해당한다.
  2. 오른쪽으로 갔다 다시 리턴하여 왼쪽으로 가는 경우
    ex) BBAAAAAYYY 의 경우, BB까지 갔다가 다시 돌아가 YYY를 완성해준다.
  3. 왼쪽으로 갔다 다시 리턴하여 오른쪽으로 가는 경우
    ex) CCCAAAAAAY 의 경우, 처음부터 왼쪽으로 움직여 Y를 완성해주고 다시 오른쪽으로 돌아가 CCC를 완성해준다.
 */

/**@param {string} name*/
function solution1(name) {
  let changeAlphabet = 0;
  let move = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    let changeNum = name.charCodeAt(i);
    changeNum < 78 ? (changeAlphabet += changeNum - 65) : (changeAlphabet += 91 - changeNum);

    let index = i + 1;
    while (index < name.length && name[index] == 'A') index++;

    move = Math.min(move, i * 2 + name.length - index);
    move = Math.min(move, (name.length - index) * 2 + i);
  }

  return changeAlphabet + move;
}

// console.log('JEROEN', solution1('JEROEN'));

/**@param {string} name*/
function solution2(name) {
  let moveUpDown = 0;
  let moveLeftRight = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    const currentAlphabet = name[i];
    const findCurrentAlphabetCode = currentAlphabet.charCodeAt(0);
    moveUpDown += Math.min(findCurrentAlphabetCode - 65, 90 - findCurrentAlphabetCode + 1);

    let index = i + 1;
    while (index < name.length && name[index] == 'A') index++;

    moveLeftRight = Math.min(moveLeftRight, i * 2 + name.length - index);
    moveLeftRight = Math.min(moveLeftRight, (name.length - index) * 2 + i);
  }

  return moveUpDown + moveLeftRight;
}
// console.log('JEROEN', solution2('JEROEN'));
// console.log('AAAA', solution2('AAAA'));
// console.log('ABAAB', solution2('ABAAB'));
// console.log('BAAB', solution2('BAAB'));
// console.log('ABBAAAZ', solution2('ABBAAAZ'));
// console.log('ABAAB', solution2('ABAAB'));

function solution3(name) {
  return [...name]
    .reduce(
      (move, currentAlphabet, index) => {
        const findCurrentAlphabetCode = currentAlphabet.charCodeAt(0);
        move[0] += Math.min(findCurrentAlphabetCode - 65, 90 - findCurrentAlphabetCode + 1);

        let nextMoveIndex = index + 1;
        while (nextMoveIndex < name.length && name[nextMoveIndex] == 'A') nextMoveIndex++;

        move[1] = Math.min(move[1], index * 2 + name.length - nextMoveIndex);
        move[1] = Math.min(move[1], (name.length - nextMoveIndex) * 2 + index);
        return move;
      },
      [0, name.length - 1],
    )
    .reduce((m, v) => (m += v), 0);
}
// console.log('JEROEN', solution3('JEROEN'));
// console.log('AAAA', solution3('AAAA'));
// console.log('ABAAB', solution3('ABAAB'));
// console.log('BAAB', solution3('BAAB'));
// console.log('ABBAAAZ', solution3('ABBAAAZ'));
// console.log('ABAAB', solution3('ABAAB'));
