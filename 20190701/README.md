### 문제

https://programmers.co.kr/learn/courses/30/lessons/42576?language=javascript

---

### 이해

- HashMap을 만들어서 참가자를 Key, 숫자를 Value로 하여 동명이인일 경우 +1해주자.
- 1명만 탈락하기 때문에 Value가 1인 Key값이 있을 것이다.

### 계획
1. HashMap을 만든다.
2. HashMap에 참가자를 Key로 value를 사람수로 하여 넣는다.
3. 동명이인의 경우 value += 1 해준다.
4. 통과자 명단을 읽어서 hashmap 에서 remove해준뒤 value가 1인 key값을 찾는다. 그게 탈락자의 이름이다.

### 실행

### 반성

- 단순하게 생각했어야 되는데 처음에 너무 복잡하게 가져갔음. 역시나 같은 패턴이 반복. 항상 단순하게 심플한 문장으로 해결법을 표현해보자.
