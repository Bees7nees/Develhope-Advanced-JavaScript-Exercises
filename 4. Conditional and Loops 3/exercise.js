function sumUntil(maxValue) {
  let result = 0;
  for (let i = 0; i <= maxValue; i++) {
    result += i;
    console.log(result)
  }
  return "The answer is " + result;
}

console.log(sumUntil(5));