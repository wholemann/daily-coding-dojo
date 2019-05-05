
function createTargetArr(n) {
  const targetArr = [];

  for (let i = 1; i < n; i++)
    targetArr.push(i);
  
  return targetArr;
}

function getDiffArr(input) {
  const diffArr = [];
  for (let i = 1; i < (input.length-1); i++) {
    const diffValue = Math.abs(input[i] - input[i+1]);
    diffArr.push(diffValue);
  }
  diffArr.sort(function(a, b) {
    return a - b;
  });

  return diffArr;
}

function jolly_jumper(input) {

  const n = input[0];

  if (n > 3000)
    throw new Error('input value must be less than 3000');

  const targetArr = createTargetArr(n);
  const diffArr = getDiffArr(input);
  
  console.log((targetArr.toString() == diffArr.toString()) ? 'Jolly' : 'Not jolly');
}
jolly_jumper([4, 1, 4, 2, 3]);

test('createTargetArr', () => {
  expect(createTargetArr(4)).toEqual([1, 2, 3]);
  expect(createTargetArr(5)).toEqual([1, 2, 3, 4]);
  expect(createTargetArr(6)).toEqual([1, 2, 3, 4, 5]);
});

test('jolly_jumper', () => {
  expect(jolly_jumper([4, 1, 4, 2, 3])).toBe('Jolly');
  expect(jolly_jumper([5, 1, 4, 2, 3, 4])).toBe('Not jolly');
  expect(jolly_jumper([5, 1, 4, 2, -1, 6])).toBe('Not jolly');
})

test('throws on input range over', () => {
  expect(() => {
    jolly_jumper([3001, 1, 3, 5, 4, 6]);
  }).toThrow();
})