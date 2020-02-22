const solution = (brown, red) => {
  let w = 0;
  let h = 0;

  do {
    h += 1;
    w = red / h;
  } while (brown !== 2 * (w + h + 2))

  return [w + 2, h + 2];
}

test('solution', () => {
  expect(solution(10, 2)).toEqual([4, 3]);
  expect(solution(8, 1)).toEqual([3, 3]);
  expect(solution(24, 24)).toEqual([8, 6]);
});
