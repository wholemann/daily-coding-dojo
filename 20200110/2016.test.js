const solution = (a, b) =>{
  const daysOfTheWeek = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  return daysOfTheWeek[(nthDayOfYear(a, b) - 1) % 7];
};

const nthDayOfYear = (a, b) => {
  const daysOfEachMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return a !== 1
    ? daysOfEachMonth.slice(0, a - 1).reduce((a, b) => a + b) + b
    : b
};

test('solution', () => {
  expect(solution(1, 8)).toBe("FRI");
  expect(solution(5, 24)).toBe("TUE");
});

test('nthDayOfYear', () => {
  expect(nthDayOfYear(1, 8)).toBe(8);
  expect(nthDayOfYear(2, 1)).toBe(32);
  expect(nthDayOfYear(3, 1)).toBe(61);
});
