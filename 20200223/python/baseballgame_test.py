from itertools import permutations


def solution(baseball):
    numbers = [str(x) for x in range(1, 10)]
    candidates = [''.join(result_set) for result_set in permutations(numbers, 3)]

    for (question, strikes, balls) in baseball:
        candidates = [candidate for candidate in candidates if match(str(question), candidate) == (strikes, balls)]

    return len(candidates)


def match(question, candidate):
    strikes, balls = 0, 0

    for i in range(3):
        if question[i] == candidate[i]:
            strikes += 1
        elif question[i] in candidate:
            balls += 1

    return strikes, balls


def test_solution():
    assert solution([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]]) == 2


def test_match():
    assert match('123', '324') == (1, 1)
