/*
1. 문자열의 배열로 생각하고 문자를 한개씩 읽는다.
2. 공백을 읽었을 경우 공백 이전 인덱스까지 문자열을 배열에 첫번째 요소로 넣는다.
3. 2번을 반복한다.
4. 마지막 인덱스에 도달하면 이 과정을 종료한다.
*/

function splitString(input) {
  const words = [];
  let word = '';
  let startIndex = 0;
  let blankIndex = 1;
  for (let i = startIndex; i < blankIndex; i++) {
    word += input[i];
  }
  words.unshift(word);
  words.unshift('am');
  words.unshift('a');
  words.unshift('boy.');

  return words;
}

function reverseString(input) {
  const splitValues = splitString(input);
  let result = '';
  for (let i = 0; i < splitValues.length; i++) {
    if (i == (splitValues.length - 1)) {
      result += splitValues[i];
      return result;
    }
    result += splitValues[i] + ' ';
  }
}

test('reverseString', () => {
  expect(reverseString('I am a boy.')).toEqual('boy. a am I');
});

test('splitString', () => {
  expect(splitString('I am a boy.')).toEqual(['boy.', 'a', 'am', 'I']);
});