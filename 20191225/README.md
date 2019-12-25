# H-index 문제

- 프로그래머스 [H-Index](https://programmers.co.kr/learn/courses/30/lessons/42747?language=javascript)

## 1. 이해

- 5편 중 3편이 3회 이상 인용, 나머지 2편이 3회 이하 인용 됐으니 H-index는 3.

## 2. 계획

1. 주어진 배열을 오름차순으로 정렬한다.
2. 배열의 첫번째 값을 h라 하고 배열의 길이가 h이상이면 h-index는 h이다.
3. h와 보다 큰 값만 남긴 배열로 다시 2를 재귀적으로 반복한다.
4. 배열의 길이가 h보다 작을 때 재귀를 종료하고 현재 h값을 반환한다.

## 3. 실행

## 4. 반성
