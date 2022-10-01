function stairCase(n) {
  // Write your code here
  let result = '';
  for (let i = n; i > 0; i--) {
    result += '#'.padStart(i).padEnd(n, '#');
    if (i > 1) result += '\n';
  }
  console.log(result);
}
stairCase(6);

// C style
function stairCaseFor(n) {
  // Write your code here
  let result = '';
  let z = 1;
  for (let i = n; i > 0; i--) {
    for (let j = i - 1; j > 0; j--) {
      result += ' ';
    }
    for (let k = 0; k < z; k++) {
      result += '#';
    }
    result += '\n';
    z++;
  }
  console.log(result);
}
// stairCaseFor(6);
