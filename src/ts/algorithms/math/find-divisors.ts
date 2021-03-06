export const findDivisors = (num: number) => {
  const divisors = [];

  const sqrt = Math.floor(Math.sqrt(num));

  for (let i = 1; i <= sqrt; i++) {
    if (num % i === 0) {
      divisors.push(i);
      if (i !== sqrt) {
        divisors.push(Math.floor(num / i));
      }
    }
  }

  if (num >= 2 && !divisors.includes(num)) {
    divisors.push(num);
  }

  divisors.sort((a, b) => a - b);

  return divisors;
};
