import re


def solution(skill, skill_trees):
    skills = [re.sub('[^{}]'.format(skill), '', s) for s in skill_trees]
    return len([s for s in skills if skill.startswith(s)])


def test_solution():
    assert solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']) == 2
