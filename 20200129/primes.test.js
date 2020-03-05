const solution = (n) => {
  const sieve = Array(Math.floor(Math.sqrt(n))).fill().map((_, i) => i + 2);

  return sieve.reduce(({ nums, primes }, cur, index) => {
    // nums: nums.filter(v => v % nums[0] !== 0),
    // primes: index !== sieve.length - 1 ? primes + 1 : primes + nums.length
    // nums: nums.filter(v => v % nums[0] !== 0),
    return { primes: { ...primes, [`${cur}`]: true } }
  }, {
    nums: Array(n - 1).fill().map((_, i) => i + 2),
    primes: {},
  }).primes;
};

test('solution', () => {
  expect(solution(10)).toBe(4);
  expect(solution(5)).toBe(3);
});
