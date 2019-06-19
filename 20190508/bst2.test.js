
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  hasNoChild() {
    return this.left ===null && this.right === null;
  }

  height() {
    if (this.hasNoChild()) {
      return 1;
    }
    const { left, right } = this;
    const nodes = [left, right].filter(i => i !== null);
    return 1 + Math.max(...nodes.map(i => i.height()));
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data, root) {
    if (root === undefined) {
      root = this.root;
    }
    
    if (root === null) {
      const node = new Node(data);
      this.root = node;
      return;
    }

    const direction = data < root.data ? 'left' : 'right';
    if (root[direction] === null) {
      root[direction] = new Node(data);
    } else {
      this.insert(data, root[direction]);
    }
  }

  delete(data, root) {
    if (root === undefined) {
      root = this.root;
    }
    if (root === null) {
      return;
    }

    if (data === root.data) {
      if (root.left !== null) {
        const leftMaxNode = this.findMaxNode(root.left);
        root = leftMaxNode;
        return;
      }
    } else if (data < root.data) {
      this.delete(data, root.left); 
    } else {
      this.delete(data, root.right); 
    }
  }

  findMaxNode(node){
    if (node === undefined) {
      node = this.root;
    }
    if(node.right === null) {
      return node;
    }
    return this.findMaxNode(node.right);
  }

  getHeight(root) {
    // if (!this.root) {
    //   return 0;
    // }
    // return this.root.height();

    if (root === undefined) {
      root = this.root;
    }
    
    if(root === null) {
      return 0;
    }
    if(root.hasNoChild()) {
      return 1;
    }
    const { left, right } = root;
    return 1 + Math.max(this.getHeight(left),
                        this.getHeight(right));
    // left.height(), right.height()
  }
}

test('bst', () => {
  const bst = new BST();
  expect(bst.getHeight()).toBe(0);
  bst.insert(7);
  expect(bst.getHeight()).toBe(1);
  bst.insert(3);
  expect(bst.getHeight()).toBe(2);
  bst.insert(5);
  expect(bst.getHeight()).toBe(3);
  bst.insert(2);
  bst.insert(9);
  bst.insert(4);
  bst.insert(1);

  expect(bst.getHeight()).toBe(4);
  expect(bst.findMaxNode()).toBe(9);
  bst.delete(3);
  bst.delete(4);
  expect(bst.getHeight()).toBe(3);
});
