from collections import Counter
from functools import reduce


def solution(clothes):
    c = Counter([category for _, category in clothes])

    return reduce(lambda acc, x: acc * (x + 1), c.values(), 1) - 1


def test_solution():
    assert solution(
        [["yellow_hat", "headgear"],
         ["blue_sunglasses", "eyewear"],
         ["green_turban", "headgear"]]) == 5
    assert solution(
        [["crow_mask", "face"],
         ["blue_sunglasses", "face"],
         ["smoky_makeup", "face"]]) == 3
