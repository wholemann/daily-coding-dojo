const solution = (a, b) => 
  [...a].sort((a, b) => a - b)
    .reduce(({ target, sum }, c, i) => ({
      sum: sum + c * target[i],
      target: target,
    }), {
      sum: 0,
      target: [...b].sort((a, b) => b - a),
    }).sum;

test('', () => {
  expect(solution([1, 4, 2], [5, 4, 4])).toBe(29);
});
