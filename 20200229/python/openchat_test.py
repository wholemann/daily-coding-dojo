MESSAGE = {
    'Enter': '{}님이 들어왔습니다.',
    'Leave': '{}님이 나갔습니다.'
}


def solution(record):
    nicknames = {}
    events = []

    for r in record:
        command, uid, nickname = (r + ' ').split(' ')[:3]
        if command in ['Enter', 'Change']:
            nicknames[uid] = nickname
        if command in ['Enter', 'Leave']:
            events.append((command, uid))

    return [MESSAGE[command].format(nicknames[uid]) for command, uid in events]


def test_solution():
    assert solution(['Enter uid1234 Muzi', 'Enter uid4567 Prodo', 'Leave uid1234', 'Enter uid1234 Prodo',
                     'Change uid4567 Ryan']) == ['Prodo님이 들어왔습니다.', 'Ryan님이 들어왔습니다.', 'Prodo님이 나갔습니다.',
                                                 'Prodo님이 들어왔습니다.']
