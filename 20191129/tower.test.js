const getReceivers = (heights) => {
  const stack = [...heights];
  const answer = [];
  
  while (stack.length !== 0) {
    const sender = stack.pop();
    answer.unshift(getLastIndexOfTower(stack, sender));
  }
  return answer;
};

const getLastIndexOfTower = (heights, sender) => {
  return heights.map(receiver => receiver > sender ? true : false).lastIndexOf(true) + 1;
};

test('getReceivers', () => {
  expect(getReceivers([6, 9, 5])).toEqual([0, 0, 2]);
  expect(getReceivers([6, 9, 5, 7, 4])).toEqual([0, 0, 2, 2, 4]);
  expect(getReceivers([3, 9, 9, 3, 5, 7, 2])).toEqual([0, 0, 0, 3, 3, 3, 6]);
});

test('getLastIndexOfTower', () => {
  expect(getLastIndexOfTower([6, 9], 5)).toBe(2);
});
