# 앞에 있는 기능 진행이 100이 됐을 때 뒤에 있는 기능도 배포 가능
# 1. 각 기능이 배포가능한 상태가 되는 날까지 소요되는 일자를 계산하여 배열로 만든다.
# 2. 1에서 생성된 배열의 첫번째 값보다 큰 원소가 등장하는 index까지 모든 원소들을 count하여 result 배열에 담는다.
# 3. 배열이 빈 배열이 될 때까지 2를 반복하여 result에 담고 빈 배열이 되면 return 한다.
import math
from collections import deque


def solution1(progresses, speeds):
    result = []
    deploy = [math.ceil((100 - d) / speeds[i]) for i, d in enumerate(progresses)]

    while findNext(deploy):
        i = findNext(deploy)
        result.append(i)
        deploy = deploy[i:]

    result.append(len(deploy))

    return result


def findNext(deploy):
    return next((i for i, x in enumerate(deploy) if x > deploy[0]), 0)


def solution2(progresses, speeds):
    result = []
    deploy = deque([math.ceil((100 - d) / speeds[i]) for i, d in enumerate(progresses)])

    while findNext(deploy):
        i = findNext(deploy)
        result.append(len([deploy.popleft() for _ in range(i)]))

    result.append(len(deploy))

    return result


def test_solution():
    for solution in [solution1, solution2]:
        assert solution([93, 30, 55], [1, 30, 5]) == [2, 1]
        assert solution([93, 30, 55, 30], [1, 30, 5, 30]) == [2, 2]


def test_findNext():
    assert findNext([7, 3, 9]) == 2
