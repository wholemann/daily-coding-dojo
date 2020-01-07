const solution = (arr) =>
  arr.reduce((a, b) => a + b) / arr.length;

test('', () => {
  expect(solution([1, 2, 3, 4])).toBe(2.5);
  expect(solution([5, 5])).toBe(5);
  expect(solution([0])).toBe(0);
});
