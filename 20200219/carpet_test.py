def solution(brown, red):
    [[x, y]] = [i for i in comb(int((brown - 4) / 2)) if i[0] * i[1] == red]
    return [y + 2, x + 2]


def comb(num):
    return [[i, num - i] for i in range(1, num // 2 + 1)]


def test_solution():
    assert solution(10, 2) == [4, 3]


def test_comb():
    assert comb(3) == [[1, 2]]
