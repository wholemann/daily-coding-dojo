from collections import Counter


def solution1(citations):
    c = Counter()
    for i in range(0, max(citations) + 1):
        c[i] = len(list(filter(lambda x: x >= i, citations)))

    return max([h for h, cnt in c.items() if h <= cnt])


def solution2(citations):
    citations.sort(reverse=True)
    h = 0
    for c in citations:
        if h >= c:
            return h
        h += 1

    return h


def solution3(citations):
    citations.sort()
    length = len(citations)
    for i in range(length):
        if citations[i] >= length - i:
            return length - i
    return 0


def test_solution():
    for solution in [solution1, solution2, solution3]:
        assert solution([3, 0, 6, 1, 5]) == 3
        assert solution([0]) == 0
        assert solution([1]) == 1
