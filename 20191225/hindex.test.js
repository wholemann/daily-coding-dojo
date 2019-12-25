// iteration
const hIndex1 = (citations) => {
  let arr = citations.sort((a, b) => a - b);
  let h = 0;
  
  while (true) {
    arr = arr.filter(v => v > h);
    if (h >= arr.length) {
      return h;
    }
    h = h + 1;
  }
};

// recursion1
const hIndex2 = (citations) => 
  step1(
    citations
      .sort((a, b) => a - b)
      .filter(v => v > 0)
    , 0);

const step1 = (citations, h) => 
  h >= citations.length ? h : step1(citations.filter(v => v > h + 1), h + 1);

// recursion2
const hIndex3 = (citations) => 
  step2(
    citations
      .sort((a, b) => b - a)
    , 0);

const step2 = (citations, h) => 
  h + 1 <= citations[h] ? step2(citations, h + 1) : h;

test('hIndex', () => {
  [hIndex1, hIndex2, hIndex3].forEach(hIndex => {
    expect(hIndex([0])).toBe(0);
    expect(hIndex([1])).toBe(1);
    expect(hIndex([0, 1])).toBe(1);
    expect(hIndex([3, 0, 6])).toBe(2);
    expect(hIndex([3, 0, 6, 1, 5])).toBe(3);
    expect(hIndex([0, 3, 4, 22, 42, 52])).toBe(4);
  });
});
