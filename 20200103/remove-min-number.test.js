const solution = (arr) => 
  arr.length === 1 ? [-1] : arr.filter(v => v !== Math.min(...arr));

test('solution', () => {
  expect(solution([4, 1, 3])).toEqual([4, 3]);
  expect(solution([4, 3, 2, 1])).toEqual([4, 3, 2]);
  expect(solution([10])).toEqual([-1]);
});
