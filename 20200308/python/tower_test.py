# 1. 송신탑보다 큰 수신탑 중에 가장 index가 큰 탑을 찾는다.
# 2. 수신탑의 index + 1를 리스트 앞쪽에 넣는다.
# 3. 수신탑이 없으면 0을 넣는다.


def solution(heights):
    receivers = []
    while heights:
        s, heights = heights[-1], heights[:-1]
        candidates = [i for i, r in enumerate(heights) if s < r]
        receivers.insert(0, candidates and max(candidates) + 1 or 0)

    return receivers


def test_solution():
    assert solution([6, 9, 5, 7, 4]) == [0, 0, 2, 2, 4]
    assert solution([3, 9, 9, 3, 5, 7, 2]) == [0, 0, 0, 3, 3, 3, 6]
    assert solution([1, 5, 3, 6, 7, 6, 5]) == [0, 0, 2, 0, 0, 5, 6]
