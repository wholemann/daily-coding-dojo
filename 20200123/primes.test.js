const solution1 = (n) => {
  const sieve = [false, false, ...Array(n - 1).fill(true)];
  let count = 0;

  for (let i = 2; i <= n; i++) {
    if (sieve[i]) {
      count += 1;
      for (let j = i**2; j <= n; j += i) {
        sieve[j] = false
      }
    }
  }
  return count;  
};

// functional but slow
const solution2 = (n) => {
  const sieve = [...Array(Math.floor(Math.sqrt(n))).fill().map((_, i) => i + 2)];

  return sieve.reduce(({ nums, primes }, _, index) => ({
    nums: tail(nums).filter(v => v % head(nums) !== 0),
    primes: index !== sieve.length - 1 ? [...primes, head(nums)] : [...primes, ...nums]
  }), {
    nums: [...Array(Math.ceil(n/2) - 1).fill().map((_, i) => 2*i + 3)],
    primes: [2],
  }).primes.length
}

const head = (xs) => xs.slice(0, 1)[0];

const tail = (xs) => xs.slice(1);

test('solution', () => {
  [solution1, solution2].forEach(solution => {
    expect(solution(2)).toBe(1);
    expect(solution(5)).toBe(3);
    expect(solution(10)).toBe(4);
  });
});
  

test('head', () => {
  expect(head([1, 2, 3])).toBe(1);
});

test('tail', () => {
  expect(tail([1, 2, 3])).toEqual([2, 3]);
});
