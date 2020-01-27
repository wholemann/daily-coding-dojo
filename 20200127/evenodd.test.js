const solution = (num) => num % 2 === 0 ? 'Even' : 'Odd';

test('solution', () => {
  expect(solution(3)).toBe('Odd');
  expect(solution(4)).toBe('Even');
});
