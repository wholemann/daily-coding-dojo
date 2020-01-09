const solution = (heights) => 
  heights.map((s, i) =>
    indexOfLast(take(heights, i), r => r > s) + 1
  );

const take = (xs, n) => xs.slice(0, n);

const indexOfLast = (xs, f) => xs.lastIndexOf([...xs].reverse().find(f));

test('solution', () => {
  expect(solution([6, 9, 5, 7, 4])).toEqual([0, 0, 2, 2, 4]);
  expect(solution([3, 9, 9, 3, 5, 7, 2])).toEqual([0, 0, 0, 3, 3, 3, 6]);
  expect(solution([1, 5, 3, 6, 7, 6, 5])).toEqual([0, 0, 2, 0, 0, 5, 6]);
});

test('take', () => {
  expect(take([6, 9, 5], 2)).toEqual([6, 9]);
});

test('indexOfLast', () => {
  expect(indexOfLast([1, 2, 3], (a) => a > 1)).toBe(2);
  expect(indexOfLast([1, 2, 3, 4], (a) => a > 2)).toBe(3);
  expect(indexOfLast([1, 2, 3, 4], (a) => a > 4)).toBe(-1);
});
