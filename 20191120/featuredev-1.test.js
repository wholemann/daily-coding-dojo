const getDeploymentCounts = (progresses, speeds) => {
  let count = 0;
  const result = [];

  while (progresses.length > 0) {
    speeds.forEach((v, i) => {
      progresses[i] += v;
    });

    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
    }

    if (count > 0) {
      result.push(count);
      count = 0;
    }
  }

  return result;
};

test('getDeploymentCounts', () => {
  expect(getDeploymentCounts([93, 30, 55], [1, 30, 5])).toEqual([2, 1]);
});
