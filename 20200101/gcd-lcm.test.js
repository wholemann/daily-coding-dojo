// solution1 - by loop
const solution1 = (n, m) => [gcd(n, m), (n * m) / gcd(n, m)];

const gcd = (n, m) => 
  Math.max(...commonDivisors(n).filter(x => commonDivisors(m).includes(x)));

const commonDivisors = (n) => 
  Array(n).fill().map((_, i) => i + 1).filter(x => n % x === 0);

// solution2 - by Euclidean algorithm
const solution2 = (n, m) => {
  const gcd = euclidean(Math.max(n, m), Math.min(n, m));
  return [gcd, (n * m) / gcd];
};

const euclidean = (a, b) => b ? euclidean(b, a % b) : a;

test('solution', () => {
  [solution1, solution2].forEach(solution => 
    expect(solution1(3, 12)).toEqual([3, 12])
  );
});

test('gcd', () => {
    expect(gcd(3, 12)).toBe(3);
});

test('commonDivisors', () => {
  expect(commonDivisors(3)).toEqual([1, 3]);
});

test('euclidean', () => {
  expect(euclidean(12, 3)).toBe(3);
});
