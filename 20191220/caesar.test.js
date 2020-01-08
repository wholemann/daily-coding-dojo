const caesarEncrypt = (s, n) => 
  [...s].map((char) => (
    char === ' ' ? char : convert(char, n)
    )).join('');
  
const convert = (char, distance) =>
  isUpperCase(char)
    ? letters(UPPER)[index(char, distance, UPPER)]
    : letters(LOWER)[index(char, distance, LOWER)];

const UPPER = 65;
const LOWER = 97;

const isUpperCase = char => char === char.toUpperCase();

const index = (char, distance, offset) => (char.charCodeAt(0) % offset + distance) % 26

const letters = offset => [...Array(26).fill().map((_, i) => i + offset)]
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
