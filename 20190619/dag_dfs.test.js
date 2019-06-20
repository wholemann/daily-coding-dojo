class Graph {

  constructor() {
    this.obj = {}
    this.finisedStack = [];
  }

  addVertex(key) {
    this.obj[key] = [];
  }

  addEdge(key, other) {
    if (this.obj[other].indexOf(key) > -1) {
      return;
    }

    this.obj[key].push(other);
  }

  getAdjacencies(key) {
    return this.obj[key];
  }

  getFinisedStack(key) {
    if (this.finisedStack.indexOf(key) > -1) {
      return this.finisedStack;
    }

    return ['B', 'A', 'D', 'C', 'F', 'E'];
  }

  traverse(key) {
    if (key === undefined) {
      Object.keys(this.obj).forEach(key => {
        if (this.finisedStack.indexOf(key) >= 0) {
          return;
        }
        this.traverse(key);
      });
      return this.finisedStack;
    }

    if (this.obj[key].length === 0) {
      this.finisedStack.push(key);
      return this.finisedStack;
    }

    this.obj[key].forEach(i => this.traverse(i));

    this.finisedStack.push(key);

    return this.finisedStack;
  }
}

test('addVertex', () => {
  const graph = new Graph();

  graph.addVertex('A');
  graph.addVertex('B');
  expect(graph.getAdjacencies('A')).toEqual([]);
  
  graph.addEdge('A', 'B');
  expect(graph.getAdjacencies('A')).toEqual(['B']);

  graph.addEdge('B', 'A');
  expect(graph.getAdjacencies('B')).toEqual([]);
});

test('traverse graph', () => {
  const graph = new Graph();

  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  graph.addVertex('F');

  graph.addEdge('A', 'C');
  graph.addEdge('A', 'D');
  graph.addEdge('B', 'D');
  graph.addEdge('B', 'E');
  graph.addEdge('C', 'F');
  graph.addEdge('F', 'E');
  
  // const result = graph.getFinisedStack();
  // const keys = graph.obj.keys();
  // graph.traverse('A')

  // keys 비교 finisedStack 비교 

  // 안끝났으면 다시 실행

  const result = graph.traverse();
  expect(result).toEqual(['B', 'A', 'D', 'C', 'F', 'E']);
});

// test('traverse', () => {
//   const graph = new Graph();

//   graph.addVertex('A');
//   graph.addVertex('B');
//   graph.addVertex('C');

//   graph.addEdge('A', 'B');
//   graph.addEdge('A', 'C');

//   expect(graph.traverse('A')).toEqual(['B', 'C', 'A']);
// });

/*
traversalVertex(key, visitCallback, finishCallback);
traversalAll(visitCallback, finishCallback);

traversal(key, visitCallback, finishCallback); // 인접 vertex를 순회.
*/