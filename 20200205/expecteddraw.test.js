const solution = (n, a, b) => step(a, b, 1);
const step = (a, b, round) => next(a) === next(b) ? round : step(next(a), next(b), round + 1);
const next = (x) => Math.ceil(x / 2);

test('solution', () => {
  expect(solution(2, 1, 2)).toBe(1);
  expect(solution(4, 3, 2)).toBe(2);
  expect(solution(8, 4, 7)).toBe(3);
});
