const stringSort = (strings, n) => 
    strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a.charCodeAt(n) - b.charCodeAt(n));

test('stringSort', () => {
  expect(stringSort(['sun', 'bed', 'car'], 1)).toEqual(['car', 'bed', 'sun']);
  expect(stringSort(['abce', 'abcd', 'cdx'], 1)).toEqual(['abcd', 'abce', 'cdx']);
});
