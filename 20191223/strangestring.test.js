const createStrangeString = (s) => 
  s.split(' ')
    .map(v => 
      v.split('')
      .map((v, i) => i % 2 === 0 ? v.toUpperCase() : v.toLowerCase())
      .join(''))
    .join(' ');

test('createStrangeString', () => {
  expect(createStrangeString('try hello world')).toBe('TrY HeLlO WoRlD');
});
