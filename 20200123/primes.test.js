const solution = (n) => {
  const sieve = [...Array(Math.floor(Math.sqrt(n))).fill().map((_, i) => i + 2)];

  return sieve.reduce(({ nums, primes }, _, index) => ({
    nums: tail(nums).filter(v => v % head(nums) !== 0),
    primes: index !== sieve.length - 1 ? [...primes, head(nums)] : [...primes, ...nums]
  }), {
    nums: [...Array(n - 1).fill().map((_, i) => i + 2)],
    primes: [],
  }).primes.length
};

const head = (xs) => xs.slice(0, 1)[0];

const tail = (xs) => xs.slice(1);

const isPrime = (n) => 
  [...Array(n - 1).fill().map((_, i) => i + 2)]
    .filter(v => n % v === 0).length === 1;

test('solution', () => {
  expect(solution(5)).toBe(3);
  expect(solution(10)).toBe(4);
});

test('head', () => {
  expect(head([1, 2, 3])).toBe(1);
});

test('tail', () => {
  expect(tail([1, 2, 3])).toEqual([2, 3]);
});

test('isPrime', () => {
  expect(isPrime(2)).toBe(true);
  expect(isPrime(3)).toBe(true);
  expect(isPrime(4)).toBe(false);
});
