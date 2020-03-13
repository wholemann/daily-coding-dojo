def solution(number, k):
    nums = []

    for i, n in enumerate(number):
        while k and nums and nums[-1] < n:
            nums.pop()
            k -= 1
        if k == 0:
            nums.append(number[i:])
            break
        nums.append(n)
    return ''.join(nums[:len(nums) - k])


def test_solution():
    assert solution('1924', 2) == '94'
    assert solution('1231234', 3) == '3234'
    assert solution('4177252841', 4) == '775841'
    assert solution('33433', 3) == '43'
    assert solution('9' * 1000000, 3) == '9' * 999997
