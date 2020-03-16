def solution(s):
    nums = list(map(int, s.split(' ')))
    return '{} {}'.format(min(nums), max(nums))


def test_solution():
    assert solution('1 2 3 4') == '1 4'
    assert solution('-1 -2 -3 -4') == '-4 -1'
    assert solution('-1 -1') == '-1 -1'
