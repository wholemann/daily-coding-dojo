더블 링크드리스트로 만든 스택 2개로 큐를 구현한다.

1. 이해
미지의 것. 주어진 자료. 주어진 조건.
스택이 2개.

2. 계획
- stack1은 enqueue용, stack2는 dequeue용.
- dequeue시 stack2가 empty라면 stack1의 모든 요소를 pop하여 stack2로 옮긴다.
- 만약 stack2가 !empty라면 stack2.pop()
- dequeue 하기 전 stack2가 empty라면 
while(!stack1.isEmpty()) {
  const value = stack1.pop();
  stack2.push(value);
}
3. 실천
4. 반성