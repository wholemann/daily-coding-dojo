test('queue', () => {

  const queue = {
    
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