문제

https://programmers.co.kr/learn/courses/30/lessons/42588?language=javascript

---

### 이해

- 스택을 이용한 문제인 듯 하다. 내 앞에 있는 탑만 비교 대상이기 때문.
- 스택은 js에서 배열을 이용하면 꿀.
- 수신한 탑의 index + 1을 return해야 한다.

### 계획
1. 스택에 탑의 높이인 heights 배열의 값을 순서대로 담는다.
2. 최상단에서부터 pop()하면서 해당 탑의 높이와 나머지 스택에 남아 있는 탑들의 높이와 비교한다.
3. pop된 탑보다 높은 탑이 있다면 해당 탑의 heights 배열에서 index와 동일한 result[index] = index+1;
4. 높이가 같거나 없으면 result[index] = 0;

### 실행

### 반성

- 의외로 문제를 푸는 방법은 단순한 문장으로 끝난다. '나의 앞에 있는 놈들 중에 나보다 크면서 가장 인덱스가 큰 놈'
- 문제 해법을 단순한 문장으로 표현해보려 하자.
- lastIndexOf()가 핵심이었는데 없으면 -1이기 때문에 +1 해주면 문제의 조건에도 부합한다.
- lastIndexOf()를 구글에 검색했더니 String.prototype.lastIndexOf()가 바로 나와서 배열엔 지원을 안 하는 건가? 라는 망상을 하다가 시간을 엄청 허비했다.
- 사실 배열과 String은 차이가 없는데 이런 멍청한;;;

