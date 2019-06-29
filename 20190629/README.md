문제

https://programmers.co.kr/learn/courses/30/lessons/42587?language=javascript

---


### 이해

- 큐를 이용해야 된다(js 배열)
- 우선순위 최대값이 가장 먼저 인쇄, 재귀를 이용하면 편할 듯.

### 계획

1. dequeue(shift()) 후 우선순위가 높은 문서가 있는지 검사한다.
2. 있다면 다시 enqueue -> 1을 반복.
3. 없다면 인쇄한다.
4. 인쇄 후 인쇄순서를 담는 배열에 저장한다.
5. 내가 출력하고자 했던 문서의 결과 배열에서 index를 answer로 return 한다.

### 실행

### 반성

- 더 간략한 코드 작성이 가능했을 것 같다.
- map에서 object를 return 할 때 object에 computed property name을 주는 방법을 한참 못 찾았다.
- 근데 생각해보니 굳이 A B C D로 키값을 주려고 집착할 필요가 없이 임의의 아무 값이든 상관이 없었다.