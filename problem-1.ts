function sumArray(numbers: number[]): number {
  let sum = 0;
  numbers.map((number) => (sum += number));
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 6]));
