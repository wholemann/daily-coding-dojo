const solution = (s) =>
  ![...s]
    .map(v => v.toLowerCase())
    .filter(v => v === 'p' || v === 'y')
    .map(v => v === 'p' ? 1 : -1)
    .reduce((a, b) => a + b);

test('solution', () => {
  expect(solution('pPoooyY')).toBe(true);
  expect(solution('Pyy')).toBe(false);
});
