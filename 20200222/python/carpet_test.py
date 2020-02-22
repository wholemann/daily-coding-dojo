def solution(brown, red):
    for i in range(1, red + 1):
        if red % i == 0:
            if (brown + red) == (red / i + 2) * (i + 2):
                return [red / i + 2, i + 2]


def test_solution():
    assert solution(10, 2) == [4, 3]
    assert solution(8, 1) == [3, 3]
    assert solution(24, 24) == [8, 6]
