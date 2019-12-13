const harshad = (x) => {
  return x % x.toString().split('').reduce((a, b) => (+a) + (+b)) === 0;
};

test('harshad', () => {
  expect(harshad(10)).toBe(true);
  expect(harshad(12)).toBe(true);
  expect(harshad(11)).toBe(false);
  expect(harshad(13)).toBe(false);
});
