Array.prototype.isEmpty = function() {
  if (this.length === 0) {
    return true;
  }
  return false;
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
        while (!this.enqueueStack.isEmpty()) {
          const value = this.enqueueStack.pop();
          this.dequeueStack.push(value);
        }
      }
      return this.dequeueStack.pop();
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

});