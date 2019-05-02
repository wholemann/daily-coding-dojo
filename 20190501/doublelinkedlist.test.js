Array.prototype.isEmpty = function() {
  return this.length === 0;
};

// const Node = function() {
//   this.value = null;
//   this.preNode = null;
//   this.nextNode = null;
// };

class Node {
  constructor(value) {
    this.value = value;
    this.preNode = null;
    this.nextNode = null;
  }
}

// const DoublyLinkedList = function() {
//   this.head = null;
//   this.tail = null;
// };

// DoublyLinkedList.prototype.append = function() {
//   //
// };

// DoublyLinkedList.prototype.getLast = function() {
//   return 3;
// };

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  getLast() {
    return this.tail.value;
  }
  
  append(value) {
    const node = new Node(value);
    node.preNode = this.tail;
    this.tail = node;
  }

  removeLast() {
    this.tail = this.tail.preNode;
  }
}
// append -> getLast() -> 마지막 append value
describe('DoublyLinkedList', () => {
  describe('append', () => {
    const list = new DoublyLinkedList;
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.getLast()).toBe(3);
    list.removeLast();
    expect(list.getLast()).toBe(2);
  });

  describe('preppend', () => {
    const list = new DoublyLinkedList;
    list.preppend(3);
    list.preppend(2);
    list.preppend(1);
    expect(list.getHead()).toBe(1);
    list.removeHead();
    expect(list.getHead()).toBe(2);
  });
});

test('queue', () => {
  const queue = {
    enqueueStack: [],
    dequeueStack: [],
    enqueue(element) {
      this.enqueueStack.push(element);
    },
    dequeue() {
      if (this.dequeueStack.isEmpty()) {
        this.transferQueue();
      }
      return this.dequeueStack.pop();
    },
    transferQueue() {
      while (!this.enqueueStack.isEmpty()) {
        const value = this.enqueueStack.pop();
        this.dequeueStack.push(value);
      }
    },
  };

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  expect(queue.dequeue()).toBe(1);
  expect(queue.dequeue()).toBe(2);

  queue.enqueue(4);

  expect(queue.dequeue()).toBe(3);
  expect(queue.dequeue()).toBe(4);
});
