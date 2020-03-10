from functools import cmp_to_key


def solution(numbers):
    numbers = list(map(str, numbers))
    return str(int(''.join(sorted(numbers, key=cmp_to_key(compare)))))


def compare(a, b):
    return (a + b < b + a) - (a + b > b + a)


def test_solution():
    assert solution([6, 10, 2]) == '6210'
    assert solution([3, 30, 34, 5, 9]) == '9534330'
    assert solution([0, 0, 0, 0, 0]) == '0'


def test_compare():
    assert compare('6', '10') == -1
