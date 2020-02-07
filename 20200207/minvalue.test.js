const solution = (a, b) => 
  [...a].sort((a, b) => a - b)
    .reduce(({ target, sum }, c, i) => ({
      sum: sum + c * target[i],
      target: target,
    }), {
      target: [...b].sort((a, b) => b - a),
      sum: 0,
    }).sum;

test('', () => {
  expect(solution([1, 4, 2], [5, 4, 4])).toBe(29);
});
