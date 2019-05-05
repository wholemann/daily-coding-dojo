
function getDiffArr(input) {
  return Array.from({length: input.length - 1}, (v, i) => Math.abs(input[i] - input[i+1]));
}

function isJolly(input) {
  const n = input.shift();
  if (n > 3000) 
    throw new Error('input value must be less than 3000');
  return getDiffArr(input).sort().every((v, i) => v === (i + 1));
}

test('isJolly', () => {
  expect(isJolly([3, 1, 2, 4])).toBe(true);
  expect(isJolly([4, 1, 4, 2, 3])).toBe(true);
  expect(isJolly([5, 1, 4, 2, -1, 6])).toBe(false);
});

test('throws on input range over', () => {
  expect(() => {
    isJolly([3001, ...Array(3001).keys()]);
  }).toThrow();
});

test('getDiffArr', () => {
  expect(getDiffArr([1, 2, 4])).toEqual([1, 2]);
  expect(getDiffArr([1, 2, 3])).toEqual([1, 1]);
  expect(getDiffArr([1, 2, 3, 5])).toEqual([1, 1, 2]);
  expect(getDiffArr([1, 4, 2, 3])).toEqual([3, 2, 1]);
});