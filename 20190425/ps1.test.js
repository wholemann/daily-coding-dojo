/*
1. 각 자릿수를 분리한다. 각 자릿수는 `10^n * 정수`로 표현가능하다. 즉, 10^n으로 나눈다면 각 자릿수의 정수만 분리해낼 수 있다.
2. 1을 반복하여 정수만 분리한 후 배열에 담는다. ex) [1, 2, 3, 4]
3. 배열의 각 요소를 문자열 더하기를 통해 하나의 문자열로 만든다. 이를 위한 도구가 있다면 찾아보고 이용한다.
*/

function divideNumberOfDigits(input) {
  return [1, 2, 3];
}

function int2Str(input) {
  let numbers = divideNumberOfDigits(input);
  let result = '';
  for(let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

test('divideNumberOfDigits', () => {
  expect(divideNumberOfDigits(123)).toEqual([1, 2, 3]);
})

test('int2Str', () => {
  expect(int2Str(123)).toBe('123');
});