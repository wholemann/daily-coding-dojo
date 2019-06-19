문제는 전화번호부 (key = 이름, value = 전화번호)를 sort 한 후 binary search(key를 이용)를 수행한다.

1. 이해
전화번호부의 key는 이름인데 문자열 정렬이 필요하다. 가나다 순.
sort: 퀵소트(pivot left right)
그 후 binary search로 찾는다.
전화번호: 010-0000-0000 형식
성이 같으면 가운데 글자도 비교.

2. 계획
1. 퀵소트를 구현한다. 배열의 가운데 인덱스인 pivot을 구해서 작으면 left 배열, 크면 right 배열에 push.
2. 1의 작업을 재귀로 실행한다.
3. binary search는 찾고자 하는 값이 정렬된 데이터의 가운데 값보다 작으면 왼쪽 크면 오른쪽에서 찾아본다.
4. 3을 재귀로 실행한다.

3. 실행
const phoneBook = {
  d: 4,
  b: 2,
  c: 3,
  a: 1,
  e: 5
}


4. 반성