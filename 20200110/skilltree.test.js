/*
  주의: 선행 스킬트리에 있는 스킬이 아닌 스킬로만 구성된 스킬트리가 있을 수 있음.

  1. 먼저 skill_trees에 있는 각 문자열들을 선행스킬 문자만으로 구성된 문자열로 변환된 배열로 만든다.
  2. 그 후 배열 안의 문자열들 중 선행스킬 문자열의 부분집합인 문자열들만 걸러낸다.
  3. 걸러낸 배열의 길이를 리턴한다.
*/

const solution = (skill, skill_trees) =>
  skill_trees
    .map(v => v.replace(new RegExp(`[^${skill}]`, 'g'), ''))
    .filter(s => skill.startsWith(s)).length;

test('solution', () => {
  expect(solution('ABC', ['A', 'B'])).toBe(1);
  expect(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA'])).toBe(2);
  expect(solution('CBD', ['EFG'])).toBe(1);
});
