### 문제

Set을 구현하라.
append, remove, getValues, contains

equals, union, difference, intersection, subset

---

1. 이해

    - Set의 연산 기능 구현.

2. 계획

    - Class Set 생성.
    - Set에 문제에 제시된 method를 구현.

3. 실행

4. 반성

    - 함수형 프로그래밍은 가독성을 높여준다.
    - 비슷한 로직, 생김새의 메소드는 한 곳에 모아두는 게 이해하기 쉽다.

---

### 문제

Set을 이용하여 1000이하의 자연수 중 self number를 구하라.

1. 이해
    - self number: 제네레이터가 없는 숫자
    - ex) 1, 3, 5, 7, 9, 20...

2. 계획
    - self number가 아닌 숫자들을 찾는다.
    - n=1~1000 일 때, d(n) = self number가 아닌 숫자.
    - d(n) = 각 자리수의 합 + n
    - 이 숫자들을 SetA에 넣는다.
    - (1, 2, ..., 1000)인 집합에서 SetA를 뺀다.

3. 실행

4. 반성
