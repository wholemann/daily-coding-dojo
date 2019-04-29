/*
1. 각 자릿수를 분리한다. 각 자릿수는 `10^n * 정수`로 표현가능하다. 즉, 10^n으로 나눈다면 각 자릿수의 정수만 분리해낼 수 있다.
2. 1을 반복하여 정수만 분리한 후 배열에 담는다. ex) [1, 2, 3, 4]
3. 배열의 각 요소를 문자열 더하기를 통해 하나의 문자열로 만든다. 이를 위한 도구가 있다면 찾아보고 이용한다.
*/

function divideNumberOfDigits(input) {
  const numbers = [];

  if (input == 0) {
    numbers.push(input);
    return numbers;
  }

  let digit;
  while (input != 0) {
    digit = input % 10;
    numbers.unshift(digit);
    input = (input - digit) / 10;
  }

  return numbers;
}

function int2Str(input) {
  let result = '';
  if (input < 0) {
    result = '-';
    input *= -1;
  }
  let numbers = divideNumberOfDigits(input);
  
  for(let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

test('int2Str', () => {
  expect(int2Str(123)).toBe('123');
});
test('int2Str', () => {
  expect(int2Str(130)).toBe('130');
});
test('int2Str', () => {
  expect(int2Str(13)).toBe('13');
});
test('int2Str', () => {
  expect(int2Str(0)).toBe('0');
});
test('int2Str', () => {
  expect(int2Str(-123)).toBe('-123');
});

test('divideNumberOfDigits', () => {
  expect(divideNumberOfDigits(123)).toEqual([1, 2, 3]);
});
test('divideNumberOfDigits', () => {
  expect(divideNumberOfDigits(103)).toEqual([1, 0, 3]);
});
test('divideNumberOfDigits', () => {
  expect(divideNumberOfDigits(130)).toEqual([1, 3, 0]);
});
test('divideNumberOfDigits', () => {
  expect(divideNumberOfDigits(1)).toEqual([1]);
});
test('divideNumberOfDigits', () => {
  expect(divideNumberOfDigits(0)).toEqual([0]);
});
// test('divideNumberOfDigits', () => {
//   expect(divideNumberOfDigits(-123)).toEqual([-1, 2, 3]);
// });