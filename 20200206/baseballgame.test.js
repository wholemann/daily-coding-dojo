const solution = (baseball) =>
  Array(900).fill(100)
    .map((v, i) => `${v + i}`)
    .filter(v => !v.includes('0') && [...new Set(v)].length === 3)
    .filter(v => isCandidate(v)(baseball)).length;

const isCandidate = candidate => baseball =>
  baseball.every(([num, strike, ball]) =>
    [...`${num}`].filter(v => candidate.includes(v)).length === strike + ball &&
    [...`${num}`].filter((v, i) => candidate.indexOf(v) === i).length === strike);

test('solution',() => {
  expect(solution([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]])).toBe(2);
});

test('isCandidate', () => {
  expect(isCandidate('324')([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]])).toBe(true);
});
