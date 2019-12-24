const str2int = (s) => {
  return Number.parseInt(s);
};

test('str2int', () => {
  expect(str2int('1234')).toBe(1234);
  expect(str2int('-1234')).toBe(-1234);
});