### 문제

Set을 이용하여 1000이하의 자연수 중 self number를 구하라.

1. 이해
    - set의 기본 기능(append, remove, getValues, contains) 구현
    - set operator(equals, union, difference, intersection, subset) 구현
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
    - 수업 때 해봤던 array로 Set을 구현한 건 아쉽다.
    - 다음 복습 땐 HashTable로 Set을 구현해서 문제를 풀어보겠다.

---

### Graph 구현

1. 이해
    - addVertex('A'), addEdge('A', 'B')
    - DAG는 addEdge('B', 'A')는 안 된다.
    - color(white, grey, black)는 vertex가 가지고 있는다.
    - vertex는 Finished Time을 가지고 있는다 or finish된 vertex를 Stack에 순서대로 넣는다.
    - DFS 방식으로 탐색한다.

2. 계획
    - addVertex(), addEdge()를 구현한다.
    - getAdjacencies()를 구현해서 Vertex의 인접 Vertex를 구해서 올바른 Graph 구현을 확인한다.
    - traverse()를 구현한다. finishedStack

3. 실행

4. 반성