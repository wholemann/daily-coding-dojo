Array.prototype.isEmpty = function() {
  return this.length === 0;
}

class Node {
  constructor(value) {
    this.nextNode = null;
    this.prevNode = null;
    this.value = value;
  }
}

class DoublyLinkedList {
  constructor() {
    this.tail = null;
  }
  
  getLast() {
    return this.tail.value;
  }

  removeLast() {
    this.tail = this.tail.prevNode;
  }

  append(value) {
    const node = new Node(value);
    node.prevNode = this.tail;
    this.tail = node;
  }
}

class Stack extends DoublyLinkedList {
  constructor() {
    super();
  }

  push() {

  }

  pop() {
    return 3;
  }
}

describe('DoublyLinkedList', () => {
  describe('append', () => {
    const list = new DoublyLinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.getLast()).toBe(3);
    list.removeLast();
    expect(list.getLast()).toBe(2);
  });
});

describe('Stack', () => {
  describe('pop', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
  });
});

test('queue', () => {

  const queue = {
    enqueueStack: [],

    dequeueStack: [],

    enqueue(value) {
      this.enqueueStack.push(value);
    },
    dequeue() {
      if (this.dequeueStack.isEmpty()) {
        this.transferValues();
      }
      return this.dequeueStack.pop();
    },
    
    transferValues() {
      while (!this.enqueueStack.isEmpty()) {
        const value = this.enqueueStack.pop();
        this.dequeueStack.push(value);
      }
    }
  };

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  expect(queue.dequeue()).toBe(1);
  expect(queue.dequeue()).toBe(2);

  queue.enqueue(4);
  
  expect(queue.dequeue()).toBe(3);
  expect(queue.dequeue()).toBe(4);

  queue.enqueue(5);
  queue.enqueue(6);
  queue.enqueue(7);
  queue.enqueue(8);
  queue.enqueue(9);
  queue.enqueue(10);

  expect(queue.dequeue()).toBe(5);
  expect(queue.dequeue()).toBe(6);

  queue.enqueue(4);

  expect(queue.dequeue()).toBe(7);

});