const solution = (n, stages) =>
  Array(n).fill().map((_, i) => i + 1)
    .map(s => ({ stage: s, rate: failureRate(s, stages) }))
    .sort((a, b) => a.rate === b.rate ? a.stage - b.stage : b.rate - a.rate)
    .map(v => v.stage);

const failureRate = (s, stages) =>
  stages.filter(v => v === s).length / stages.filter(v => v >= s).length || 0;

test('solution', () => {
  expect(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([3,4,2,1,5]);
});

test('failureRate', () => {
  expect(failureRate(1, [2, 1, 2, 6, 2, 4, 3, 3])).toBe(1 / 8);
  expect(failureRate(2, [2, 1, 2, 6, 2, 4, 3, 3])).toBe(3 / 7);
  expect(failureRate(5, [2, 2, 2, 3])).toBe(0);
});
