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

  isEmpty() {
    return this.tail == null;
  }

  push(value) {
    this.append(value);
  }

  pop() {
    const value = this.getLast();
    this.removeLast();
    return value;
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
    expect(stack.pop()).toBe(2);
  });
  describe('isEmpty', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.isEmpty()).toBe(true);
    stack.push(4);
    expect(stack.isEmpty()).toBe(false);
  });
});

test('queue', () => {

  const queue = {
    enqueueStack: new Stack(),

    dequeueStack: new Stack(),

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