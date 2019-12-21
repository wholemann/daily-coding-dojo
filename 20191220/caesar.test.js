const caesarEncrypt = (s, n) => 
  s.split('').reduce((acc, char) => (
    char === ' '
      ? [...acc, char] : [...acc, convert(char, n)]
    ), []).join('');
  
const convert = (char, distance) =>
  isUpperCase(char)
    ? letters[index(char, distance)]
    : letters[index(char.toUpperCase(), distance)].toLowerCase();

const isUpperCase = char => char === char.toUpperCase();

const index = (char, distance) => (char.charCodeAt(0) % 65 + distance) % 26

const letters = [...Array(26).fill().map((_, i) => i + 65)]
  .map(v => String.fromCharCode(v));

test('caesarEncrypt', () => {
  expect(caesarEncrypt('A', 1)).toBe('B');
  expect(caesarEncrypt('AB', 1)).toBe('BC');
  expect(caesarEncrypt('z', 1)).toBe('a');
  expect(caesarEncrypt('a B z', 4)).toBe('e F d');
});

test('convert', () => {
  expect(convert('A', 1)).toBe('B');
  expect(convert('z', 1)).toBe('a');
});

test('isUpperCase', () => {
  expect(isUpperCase('A')).toBe(true);
  expect(isUpperCase('a')).toBe(false);
});
