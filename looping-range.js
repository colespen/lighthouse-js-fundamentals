const range = (start, end, step) => {
  let numArray = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
  return numArray;
  }
  for (let i = start; i <= end; i += step) {
    numArray.push(i);
  }
  return numArray;
}

console.log(range(0, 100, 4));

