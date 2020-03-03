from itertools import permutations
from itertools import chain


def solution1(numbers):
    nums = comb(numbers)
    ps = primes(max(nums))

    return len([x for x in nums if x in ps])


def primes(n):
    sieve = [True] + [True] * n

    m = int(n ** 0.5)
    for i in range(2, m + 1):
        if sieve[i]:
            for j in range(i * 2, n + 1, i):
                sieve[j] = False

    return [i for i in range(2, n + 1) if sieve[i]]


def comb(n):
    c = {map(int, map(''.join, permutations(list(n), i))) for i in range(1, len(n) + 1)}
    return set(chain.from_iterable(c))


# without primes

def solution2(numbers):
    nums = comb(numbers)
    nums -= set({0, 1})

    for i in range(2, int(max(nums) ** 0.5) + 1):
        nums -= set(range(i * 2, max(nums) + 1, i))

    return len(nums)


def test_solution():
    for solution in [solution1, solution2]:
        assert solution('17') == 3
        assert solution('011') == 2


def test_prime():
    assert primes(2) == [2]
    assert primes(3) == [2, 3]
    assert primes(10) == [2, 3, 5, 7]


def test_comb():
    assert comb('17') == {1, 7, 17, 71}
    assert comb('011') == {0, 1, 10, 11, 101, 110}
