const integerDescending = n => 
  +(n + '')
    .split('')
    .sort((a, b) => b - a)
    .join('');

test('integerDescending', () => {
  expect(integerDescending(118372)).toBe(873211);
});
