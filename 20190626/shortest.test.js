class Queue {

  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
  }
  
  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

class Graph {

  constructor() {
    this.vertices = [];
    this.edges = {};
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
    this.edges[vertex] = [];
  }

  hasVertex(vertex) {
    return this.vertices.includes(vertex);
  }

  addDirectedEdge(from, to) {
    this.edges[from].push(to); 
  }

  isConnected(from, to) {
    return this.edges[from].includes(to);
  }

  bfs(startVertex) {
    const queue = new Queue();
    const visited = new Set();
    const searchPath = [];
    
    visited.add(startVertex);
    queue.enqueue(startVertex);
    
    while (!queue.isEmpty()) {
      const vertex = queue.dequeue();
      searchPath.push(vertex);

      this.edges[vertex].filter(v => !visited.has(v)).forEach(v => {
        visited.add(v);
        queue.enqueue(v);
      });
    }
    
    return searchPath.join(' ');
  }

  bfsShortestPath(start, end) {
    const queue = new Queue();
    const visited = new Set();
    const searchPath = [];
    
    visited.add(start);
    queue.enqueue(start);
    
    while (!queue.isEmpty()) {
      const vertex = queue.dequeue();
      searchPath.push(vertex);

      this.edges[vertex].filter(v => !visited.has(v)).forEach(v => {
        visited.add(v);
        queue.enqueue(v);
      });
    }
  }

}


describe('Graph', () => {

  let graph;

  beforeEach(() => {
    graph = new Graph();
  });
  
  test('graph existence', () => {
    expect(graph).toBeDefined();
  });

  test('addVertex', () => {
    graph.addVertex('A');
    expect(graph.hasVertex('A')).toBeTruthy();
    expect(graph.hasVertex('B')).toBeFalsy();
  });

  test('addDirectedEdge', () => {
    graph.addVertex('A');
    graph.addVertex('B');

    graph.addDirectedEdge('A', 'B');

    expect(graph.isConnected('A', 'B')).toBeTruthy();
    expect(graph.isConnected('B', 'A')).toBeFalsy();
  });
});

describe('BFS', () => {

  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  describe('Queue: the data item stored first will be accessed first', () => {
    let queue;
    beforeEach(() => {
      queue = new Queue();
    })

    
    it('should return A if first item in Queue is A', () => {
      queue.enqueue('A');
      queue.enqueue('B');
      expect(queue.dequeue()).toEqual('A');
      expect(queue.dequeue()).toEqual('B');
    })

    it('should return true if Queue is empty', () => {
      expect(queue.isEmpty()).toBeTruthy();
    });
  });

  describe('bfs는 입력 받은 vertex로 시작해서 가까운 순서대로 vertex의 나열을 문자열로 리턴한다', () => {
    
    it('아래와 같은 vertex와 edge로 이루어진 graph에서 bfs탐색의 결과는 A B D E C F 을 리턴한다', () => {
      const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
      vertices.forEach(v => {
        graph.addVertex(v);
      });

      const edges = [['A', 'B'], ['A', 'D'], ['A', 'E'], ['B', 'C'], ['D', 'E'], ['E', 'F'], ['E', 'C'], ['C', 'F']];
      edges.forEach(([from, to]) => {
        graph.addDirectedEdge(from, to);
      });

      expect(graph.bfs('A')).toEqual('A B D E C F');
    });
  });
});

describe('shortest path problem solved by bfs', () => {

  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it('아래와 같은 vertex와 edge로 이루어진 graph에서 A에서 F로 가는 최단 경로는 A E F가 된다', () => {
    const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
      vertices.forEach(v => {
        graph.addVertex(v);
      });

      const edges = [['A', 'B'], ['A', 'D'], ['A', 'E'], ['B', 'C'], ['D', 'E'], ['E', 'F'], ['E', 'C'], ['C', 'F']];
      edges.forEach(([from, to]) => {
        graph.addDirectedEdge(from, to);
      });

      expect(graph.bfsShortestPath('A', 'F')).toEqual('A E F');
  });

});