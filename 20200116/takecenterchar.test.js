const solution = (s) =>
  [...s].splice(Math.floor((s.length + 1) / 2 - 1), s.length % 2 === 0 ? 2 : 1).join('')


test('solution', () => {
  expect(solution('abcde')).toBe('c');
  expect(solution('qwer')).toBe('we');
});
