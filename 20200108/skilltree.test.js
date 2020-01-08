const solution = (skill, skill_trees) =>
  skill_trees
    .map(v => v.replace(new RegExp(`[^${skill}]`, 'g'), ''))
    .filter(i => skill.startsWith(i))
    .length;

test('solution', () => {
  expect(solution('CBD', ['CBADF'])).toBe(1)
  expect(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA'])).toBe(2)
  expect(solution('ABC', ['EFG'])).toBe(1)
});
