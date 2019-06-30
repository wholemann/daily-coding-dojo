function getReceiveOrder(heights) {

  const stack = [...heights];
  const result = [];
  
  while (!(stack.length === 0)) {
    const sender = stack.pop();
    result.unshift(
      stack.map(v => v > sender ? true : false).lastIndexOf(true) + 1);
  }

  return result;
}

test('getReceiveOrder', () => {
  expect(getReceiveOrder([6, 9, 5, 7, 4])).toEqual([0, 0, 2, 2, 4]);
  expect(getReceiveOrder([3, 9, 9, 3, 5, 7, 2])).toEqual([0, 0, 0, 3, 3, 3, 6]);
  expect(getReceiveOrder([1, 5, 3, 6, 7, 6, 5])).toEqual([0, 0, 2, 0, 0, 5, 6]);
});