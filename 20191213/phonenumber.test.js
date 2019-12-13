const decrypt = (phone_number) => 
  phone_number.split('').map((v, i) => (i >= (phone_number.length - 4)) ? v : '*').join('');

test('decrypt', () => {
  expect(decrypt('01033334444')).toBe('*******4444');
  expect(decrypt('027778888')).toBe('*****8888');
});
