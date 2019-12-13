const sumInteger = (a, b) => a <= b
  ? Array.from({ length: Math.abs(b - a) + 1 }, (_, i) => i + a)
      .reduce((a, b) => a + b)
  : Array.from({ length: Math.abs(b - a) + 1 }, (_, i) => i + b)
      .reduce((a, b) => a + b)

test('sumInteger', () => {
  expect(sumInteger(3, 5)).toBe(12);
  expect(sumInteger(3, 3)).toBe(3);
  expect(sumInteger(5, 3)).toBe(12);
});
