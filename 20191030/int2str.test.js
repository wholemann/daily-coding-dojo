const int2str = (number) => {
  if (number < 10) {
    return [number] + '';
  }
  return int2str((number - getLastDigit(number)) / 10) + getLastDigit(number);
};

const getLastDigit = (number) => {
  return number % 10;
};

test('int2str', () => {
  expect(int2str(1234)).toBe('1234');
  expect(int2str(12345)).toBe('12345');
  expect(int2str(0)).toBe('0');
  expect(int2str(-123)).toBe('-123');
});

test('getLastDigit', () => {
  expect(getLastDigit(123)).toBe(3);
  expect(getLastDigit(12)).toBe(2);
  expect(getLastDigit(1)).toBe(1);
});