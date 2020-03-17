def solution(n, lost, reserve):
    loses = list(set(lost) - set(reserve))
    reserves = list(set(reserve) - set(lost))

    for s in loses:
        if s - 1 in reserves:
            reserves.remove(s - 1)
        elif s + 1 in reserves:
            reserves.remove(s + 1)
        else:
            n -= 1

    return n


def test_solution():
    assert solution(5, [2, 4], [1, 3, 5]) == 5
    assert solution(5, [2, 4], [3]) == 4
    assert solution(3, [3], [1]) == 2
    assert solution(5, [2, 3, 4], [3, 5]) == 4
