const getDartScore = text => 
  [...text.matchAll(/(\d+)([SDT]+)([*#]?)/g)].reduce((acc, [_, ...x]) => (
    last(x) === '*'
      ? [...head(acc), last(acc) * 2, score(x) * 2] : [...acc, score(x)]
  ), []).filter(Number.isInteger).reduce((a, b) => a + b);

const score = ([a, b, c]) => a ** ' SDT'.indexOf(b) * (c === '#' ? -1 : 1);

const head = xs => xs.slice(0, -1);
const last = xs => xs.slice(-1)[0];

const matchAll = text => 

test('getDartScore', () => {
  expect(getDartScore('1S2D*3T')).toBe(37);
  expect(getDartScore('1D2S#10S')).toBe(9);
  expect(getDartScore('1D2S0T')).toBe(3);
  expect(getDartScore('1S*2T*3S')).toBe(23);
  expect(getDartScore('1D#2S*3S	')).toBe(5);
  expect(getDartScore('1T2D3D#')).toBe(-4);
  expect(getDartScore('1D2S3T*')).toBe(59);
});

test('score', () => {
  expect(score(['1', 'S', ''])).toBe(1);
  expect(score(['2', 'D', '*'])).toBe(4);
  expect(score(['3', 'T', ''])).toBe(27);
});
