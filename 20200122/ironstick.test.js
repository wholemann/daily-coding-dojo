const solution = (arrangement) =>
  [...arrangement.replace(/\(\)/g, '*')]
    .reduce(({ sticks, total }, bracket) => ({
      sticks: sticks + (bracket === '(' && 1) + (bracket === ')' && -1),
      total: total + (bracket === '*' && sticks) + (bracket === ')' && 1),
    }), { sticks: 0, total: 0 }).total;

test('solution', () => {
  expect(solution('()')).toBe(0);
  expect(solution('(()())')).toBe(3);
  expect(solution('()(((()())(())()))(())')).toBe(17);
});
