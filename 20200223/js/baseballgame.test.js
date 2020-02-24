const solution = (baseball) =>
  Array(900).fill(100).map((v, i) => `${v + i}`)
    .filter(v => !v.includes('0') && [...new Set(v)].length === 3)
    .filter(v => isCandidate(v, baseball)).length;

const isCandidate = (candidate, baseball) => baseball.every(game => check(candidate, game));

const check = (candidate, [question, strikes, balls]) => {
  const { strike, ball } = [...`${question}`].reduce(({ strike, ball }, c, index) => {
    if (!candidate.includes(c)) {
      return { strike, ball };
    }
    return candidate.indexOf(c) === index
      ? { strike: strike + 1, ball: ball }
      : { strike: strike, ball: ball + 1 };
  }, { strike: 0, ball: 0 });

  return strikes === strike && balls === ball;
};

test('solution', () => {
  expect(solution([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]])).toBe(2);
});

test('isCandidate', () => {
  expect(isCandidate('324', [[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]])).toBe(true);
});

test('check', () => {
  expect(check('324', [123, 1, 1])).toBe(true);
});
