const getDeploymentCounts = (progresses, speeds) => {
  const leftDays = getLeftDays(progresses, speeds);
  const result = [];

  leftDays.reduce((count, _, index) => {
    count += 1;
    progresses.shift();
    if (leftDays[index] < leftDays[index + 1] || progresses.length === 0) {
      result.push(count);
      count = 0;
    }
    return count;
  }, 0);

  return result;
};

const getLeftDays = (progresses, speeds) => 
  progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));

test('getDeploymentCounts', () => {
  expect(getDeploymentCounts([93, 30, 55], [1, 30, 5])).toEqual([2, 1]);
});

test('getLeftDays', () => {
  expect(getLeftDays([93, 30, 55], [1, 30, 5])).toEqual([7, 3, 9]);
})