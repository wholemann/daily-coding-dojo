class BST {
  constructor() {
  }

  add() {

  }

  findMinHeight() {
    
  }
}

test('bst', () => {
  const bst = new BST();
  bst.add(9);
  bst.add(4);
  bst.add(17);
  bst.add(3);
  bst.add(6);
  bst.add(22);
  bst.add(5);
  bst.add(7);
  bst.add(20);

  expect(bst.findMinHeight()).toBe(1);

})