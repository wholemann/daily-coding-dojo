const solution = (n) =>
  [...`${n}`].map(Number).reverse();

test('solution', () => {
  expect(solution(12345)).toEqual([5, 4, 3, 2, 1]);
  expect(solution(1)).toEqual([1]);
});
