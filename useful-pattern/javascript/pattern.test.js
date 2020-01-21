const isPrime = (n) => !primes(Math.floor(Math.sqrt(n))).find(v => n % v === 0);

const primes = (n) => [...Array(n - 1).fill().map((_, i) => i + 2)].filter(isPrime);

test('isPrime', () => {
  expect(isPrime(2)).toBe(true);
  expect(isPrime(3)).toBe(true);
  expect(isPrime(7)).toBe(true);
  expect(isPrime(8)).toBe(false);
});

test('primes', () => {
  expect(primes(7)).toEqual([2, 3, 5, 7]);
  expect(primes(12)).toEqual([2, 3, 5, 7, 11]);
});
