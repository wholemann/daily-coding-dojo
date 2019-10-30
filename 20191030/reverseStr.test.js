
const reverseStr = (input) => {
  const words = splitStr(input);
  return words.reverse().join(' ');
};

const splitStr = (input) => {
  input += ' ';
  const words = [];
  let word = '';

  for (let i = 0; i < input.length; i++) {
    if (input[i] !== ' ') {
      word += input[i];
      continue;
    }
    words.push(word);
    word = '';
  }
  return words;
};

test('reverseStr', () => {
  expect(reverseStr('a boy.')).toBe('boy. a');
  expect(reverseStr('I am a boy.')).toBe('boy. a am I');
  expect(reverseStr('Task')).toBe('Task');
  expect(reverseStr('I am a boy. You are a girl.')).toBe('girl. a are You boy. a am I');
});

test('splitStr', () => {
  expect(splitStr('a boy.')).toEqual(['a', 'boy.']);
  expect(splitStr('I am a boy.')).toEqual(['I', 'am', 'a', 'boy.']);
});