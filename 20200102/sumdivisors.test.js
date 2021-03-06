const solution = (n) => 
  n !== 0 
    ? Array(n)
      .fill()
      .map((_, i) => i + 1)
      .filter(x => n % x === 0)
      .reduce((a, b) => a + b)
    : n

test('solution', () => {
  expect(solution(12)).toBe(28);
  expect(solution(5)).toBe(6);
  expect(solution(0)).toBe(0);
});
