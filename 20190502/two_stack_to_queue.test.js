Array.prototype.isEmpty = function() {
  return this.length === 0;
}

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