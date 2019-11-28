const getStickFragment = (arrangement) => {
  let count = 0;
  let stack = [];

  const arr = findLaser(arrangement).split('');

  arr.forEach(v => {
    switch (v) {
      case '(':
        stack.push('(');
        break;
      case '0':
        count += stack.length;
        break;
      case ')':
        stack.pop();
        count += 1;
    }
  });

  return count;
}

const findLaser = (arrangement) => {
  return arrangement.replace(/\(\)/g, 0);
}

test('getStickFragment', () => {
  expect(getStickFragment('()(((()())(())()))(())')).toBe(17);
  expect(getStickFragment('(()())')).toBe(3);
});

test('findLaser', () => {
  expect(findLaser('(()())')).toEqual('(00)');
});