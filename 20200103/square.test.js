const solution = (n) => 
  Number.isInteger(n ** (1 / 2)) ? (n ** (1 / 2) + 1) ** 2 : -1;

test('solution', () => {
  expect(solution(1000000)).toBe(1001 * 1001);
  expect(solution(121)).toBe(144);
  expect(solution(3)).toBe(-1);
});
