def solution1(n):
    answer = ''

    while n > 0:
        n -= 1
        answer = '124'[n % 3] + answer
        n //= 3

    return answer


def solution2(n):
    return step(n - 1)


def step(n):
    if n < 3:
        return '124'[n]
    return step(n // 3 - 1) + step(n % 3)


def test_solution():
    for solution in [solution1, solution2]:
        assert solution(1) == '1'
        assert solution(2) == '2'
        assert solution(3) == '4'
        assert solution(4) == '11'
        assert solution(5) == '12'
        assert solution(6) == '14'
        assert solution(7) == '21'
        assert solution(8) == '22'
        assert solution(9) == '24'
        assert solution(10) == '41'
        assert solution(11) == '42'
        assert solution(12) == '44'
        assert solution(13) == '111'
