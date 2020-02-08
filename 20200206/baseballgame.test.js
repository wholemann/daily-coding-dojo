const solution = (baseball) => {
  const nums = baseball.map(([x, _, $]) => x);
  const sb = baseball.map(([_, s, b]) => [s, b]);
  let count = 0;
  for (const n of sequence(9)) {
    if (JSON.stringify(nums.map(v => answer(n, v))) === JSON.stringify(sb)) count += 1;
  }
  
  return count;
};

const answer = (n, m) => {
  const x = [...`${n}`];
  const y = [...`${m}`];
  let s = 0;
  let b = 0;

  for (const i of [0, 1, 2]) {
    if (y.includes(x[i])) {
      if (y.indexOf(x[i]) === i) {
        s += 1;
      } else {
        b += 1;
      }
    }
  }

  return [s, b];
};

function *sequence(n) {
  const range = [...Array(n).fill().map((_, i) => i + 1)];
  for (const i of range)
    for (const j of range.filter(v => v !== i))
      for (const k of range.filter(v => (v !== i) && (v !== j)))
        yield +`${i}${j}${k}`;
};

test('solution',() => {
  expect(solution([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]])).toBe(2);
});

test('answer', () => {
  expect(answer(123, 124)).toEqual([2, 0]);
  expect(answer(123, 142)).toEqual([1, 1]);
  expect(answer(123, 351)).toEqual([0, 2]);
});
