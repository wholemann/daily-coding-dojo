def solution(length, weight, trucks):
    second = 0
    bridges = []
    while bridges or trucks:
        if ready(bridges, weight, trucks):
            bridges, trucks = go(bridges, trucks)
        bridges = shift(length, bridges)
        second += 1
    return second + 1


def shift(length, bridges):
    bridges = [(w, t + 1) for w, t in bridges]
    if bridges[0][1] == length:
        bridges = bridges[1:]
    return bridges


def ready(bridges, weight, trucks):
    return trucks and sum([w for w, t in bridges]) + trucks[0] <= weight


def go(bridges, trucks):
    return bridges + [(trucks[0], 0)], trucks[1:]


def test_solution():
    assert solution(2, 10, [7, 4, 5, 6]) == 8
    assert solution(100, 100, [10]) == 101
    assert solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]) == 110


def test_shift():
    assert shift(2, [(7, 1), (4, 0)]) == [(4, 1)]


def test_go():
    assert go([(7, 1)], [4, 1]) == ([(7, 1), (4, 0)], [1])
