/*
1. 주어진 정수(input)를 10으로 나눈 후 구해진 나머지(x)를 배열 A에 담는다.
2. input에서 1에서 구한 나머지를 빼고 10으로 나눈다.
3. 2의 결과를 input으로 하여 1을 반복한다.
4. 2의 결과가 0일 경우(input - x = 0) 더이상 계산할 자릿수가 없는 것이므로 종료한다.
5. 배열에 담긴 요소들을 더하여 문자열로 만든다.
*/

function int2Str(input) {
  let digit = input % 10;
  if (input < 10) {
    return [digit] + [];
  }
  return [int2Str((input - digit) / 10)] + [digit];
}

describe('int2Str', () => {
  describe('when input 4', () => {
    it('returns string 4', () => {
      expect(int2Str(4)).toBe('4');
    });
  });
  describe('when input 34', () => {
    it('returns string 34', () => {
      expect(int2Str(34)).toBe('34');
    });
  });
  describe('when input 234', () => {
    it('returns string 234', () => {
      expect(int2Str(234)).toBe('234');
    });
  });
  describe('when input 0', () => {
    it('returns string 0', () => {
      expect(int2Str(0)).toBe('0');
    });
  });
});