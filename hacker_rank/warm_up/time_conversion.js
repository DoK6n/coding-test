const dateTimeFormat = (meridiem, timeArr) => {
  if (meridiem === 'PM' && timeArr[0] !== 12) timeArr[0] += 12;
  else if (meridiem === 'AM' && timeArr[0] === 12) timeArr[0] = 0;

  let options = {
    hourCycle: meridiem === 'PM' ? 'h24' : 'h23',
    timeStyle: 'medium',
  };

  return Intl.DateTimeFormat('en', options).format(new Date().setHours(...timeArr));
};

/**@param {string} s*/
function timeConversion(s) {
  // Write your code here
  const meridiem = s.slice(-2);
  const timeArr = s.slice(0, 8).split(':').map(Number);

  return dateTimeFormat(meridiem, timeArr);
}

// const result = timeConversion('07:05:45PM');
// const result = timeConversion('12:40:22AM');
// const result = timeConversion('12:00:00AM');
const result = timeConversion('12:45:54PM');
// const result = timeConversion('06:40:03AM');

console.log(result);
