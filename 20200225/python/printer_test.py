from collections import deque


def solution(priorities, location):
    order = 0
    dq = deque([(v, i) for i, v in enumerate(priorities)])

    while dq:
        first = dq.popleft()
        if dq and max(dq)[0] > first[0]:
            dq.append(first)
        else:
            order += 1
            if first[1] == location:
                return order


def test_solution():
    assert solution([2, 1, 3, 2], 2) == 1
    assert solution([1, 1, 9, 1, 1, 1], 0) == 5
