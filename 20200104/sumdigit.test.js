const solution = (n) =>
  (n + '').split('').reduce((a, b) => a + (+b), 0);


test('solution', () => {
  expect(solution(1)).toBe(1);
  expect(solution(123)).toBe(6);
  expect(solution(987)).toBe(24);
});
