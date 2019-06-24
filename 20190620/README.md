### 위상정렬(topological sorting) 구현

1. 이해
    - 위상정렬은 DAG(Directed Acyclic Graph)에서만 가능하다.
    - DAG는 순환이 없는 그래프여야 한다.
    - finish된 vertex를 Stack에 순서대로 넣는다.
    - DFS 방식으로 탐색한다.
    - 위상정렬 과정 중에 순환 여부를 판단할 수 있다.

2. 계획
    - graph의 기본적인 기능과 BFS, DFS를 모두 구현한다.
    - topological sort의 경우 기본적으로 DFS를 이용한다.
    - DFS는 함수 재귀호출 방식을 이용한다.
    - DFS 함수 호출이 종료되는 순서대로 finished stack에 종료된 vertex를 넣어준다.
    - finished stack을 순서대로 꺼내면 위상 정렬의 결과이다.
    - 먼저 방문했지만 만약 아직 종료되지 않는 vertex를 다시 호출하는 경우는 순환이 있는 경우이므로 DAG가 아님을 알린다.

3. 실행

4. 반성