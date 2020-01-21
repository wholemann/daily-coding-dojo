const solution = (nums) => sumOfThree(nums).filter(isPrime).length;

const isPrime = (n) => !primes(Math.floor(Math.sqrt(n))).find(v => n % v === 0);

const primes = (n) => [...Array(n - 1).fill().map((_, i) => i + 2)].filter(isPrime);

const sumOfThree = (nums) => [...sequence(nums)];

function *sequence(nums) {
  const range = [...Array(nums.length).fill().map((_, i) => i)];
  for (const i of range.slice(0, -2))
    for (const j of range.slice(i + 1, -1))
      for (const k of range.slice(j + 1))
        yield nums[i] + nums[j] + nums[k];
}

test('solution', () => {
  expect(solution([1, 2, 3, 4])).toBe(1);
  expect(solution([1, 2, 7, 6, 4])).toBe(4);
});

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

test('sumOfThree', () => {
  expect(sumOfThree([1, 2, 3, 4])).toEqual([6, 7, 8, 9]);
});
