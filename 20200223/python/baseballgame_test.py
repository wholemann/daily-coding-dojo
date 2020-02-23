from itertools import permutations


def solution(baseball):
    numbers = [str(x) for x in range(1, 10)]
    candidates = [''.join(result_set) for result_set in permutations(numbers, 3)]

    for (request, strikes, balls) in baseball:
        candidates = [number for number in candidates if match(str(request), number) == (strikes, balls)]

    return len(candidates)


def match(request, number):
    strikes, balls = 0, 0

    for i in range(3):
        if request[i] == number[i]:
            strikes += 1
        elif request[i] in number:
            balls += 1

    return strikes, balls


def test_solution():
    assert solution([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]]) == 2


def test_match():
    assert match('123', '324') == (1, 1)
