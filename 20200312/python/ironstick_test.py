def solution(arrangement):
    sticks = 0
    total = 0
    for c in arrangement.replace('()', '*'):
        if c == '(':
            sticks += 1
        if c == '*':
            total += sticks
        if c == ')':
            sticks -= 1
            total += 1
    return total


def test_solution():
    assert solution('(()())') == 3
    assert solution('()(((()())(())()))(())') == 17
