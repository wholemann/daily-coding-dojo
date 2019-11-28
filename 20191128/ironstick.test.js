const getStickFragment = (arrangement) => {
  let count = 0;
  const stack = [];

  for (let i = 0; i < arrangement.length; i++) {
    if (arrangement[i] === '(') {
      stack.push('(');
    }
    if (arrangement[i] === ')') {
      if (arrangement[i - 1] === '(') {
        stack.pop();
        count += stack.length;
      } else {
        stack.pop();
        count += 1;
      }
    }
  }

  return count;
};

test('getStickFragment', () => {
  expect(getStickFragment('()(((()())(())()))(())')).toBe(17);
  expect(getStickFragment('(()())')).toBe(3);
  expect(getStickFragment('(()())(())')).toBe(5);
  expect(getStickFragment('((()()))')).toBe(6);
  expect(getStickFragment('()')).toBe(0);
});