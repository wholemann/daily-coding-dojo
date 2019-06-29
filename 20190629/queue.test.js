function getDocumentQueue(priorities) {
  return Array(priorities.length).fill({}).map((v, i) => ({[String.fromCharCode(65 + i)]: priorities[i]}));
}

function getPrintOrder(priorities, location) {

  let maxPriority = Math.max(...priorities);
  const queue = getDocumentQueue(priorities);
  const targetDoc = queue[location];

  const printOrder = [];

  while (!(queue.length === 0)) {
    const doc = queue.shift();
    const priority = priorities.shift();
    
    if (Object.values(doc)[0] < maxPriority) {
      queue.push(doc);
      priorities.push(priority);
    } else {
      printOrder.push(doc);
      maxPriority = Math.max(...priorities);
    }
  }

  return printOrder.indexOf(targetDoc) + 1;
}

test('getPrintOrder', () => {

  expect(getPrintOrder([2, 1, 3, 2], 2)).toBe(1);
  expect(getPrintOrder([1, 1, 9, 1, 1, 1], 0)).toBe(5);
  expect(getPrintOrder([6, 3, 16, 3, 5, 7], 3)).toBe(6);
});

test('getDocumentQueue', () => {

  expect(getDocumentQueue([2, 1, 3, 2])).toEqual([{'A': 2}, {'B': 1}, {'C': 3}, {'D': 2}]);
  expect(getDocumentQueue([1, 1, 9, 1, 1, 1])).toEqual([{'A': 1}, {'B': 1}, {'C': 9}, {'D': 1}, {'E': 1}, {'F': 1}]);
});