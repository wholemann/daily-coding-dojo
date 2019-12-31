const solution = (n, lost, reserve) => 
  diff(lost, reserve).reduce(({ attendance, spares }, index) => {
    const target = [index - 1, index + 1].find(s => spares.includes(s));
    return target
      ? { attendance: attendance, spares: spares.filter(s => s !== target) }
      : { attendance: attendance - 1, spares: spares };
    }, { attendance: n , spares: diff(reserve, lost) }).attendance;

const diff = (a, b) => a.filter(x => !b.includes(x));

test('solution', () => {
  expect(solution(3, [3], [1])).toBe(2);
  expect(solution(5, [2, 4], [1, 3, 5])).toBe(5);
  expect(solution(5, [2, 4], [3])).toBe(4);
  expect(solution(1, [1], [1])).toBe(1);
});

test('diff(a, b) => a - b', () => {
  expect(diff([1, 2], [2, 4])).toEqual([1]);
  expect(diff([2, 4], [1, 2])).toEqual([4]);
  expect(diff([1], [1])).toEqual([]);
});
