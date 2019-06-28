class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
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
  }

  hasVertex(vertex) {
    return this.vertices.includes(vertex);
  }

  addEdge(from, to) {
    this.edges[from] = to;
  }

  isConnected(from, to) {
    return this.edges[from].includes(to);
  }

  createVertices(board) {
    board.forEach((v, y) => 
      v.filter((v, x) => v === 1 ? this.addVertex(`(${x}, ${y})`) : undefined));
  }

  createGraph() {
    this.vertices.forEach(v => {
      let [x, y] = v.match(/\d+/g);
      x = parseInt(x);
      y = parseInt(y);

      this.addEdge(v, this.getMovablePoint(x, y));
    });
  }

  getMovablePoint(x, y) {

    const directions = [
      `(${x+1}, ${y})`,
      `(${x-1}, ${y})`,
      `(${x}, ${y+1})`,
      `(${x}, ${y-1})`
    ]
    
    return directions.filter(v => this.hasVertex(v));
  }

  getDirection(from, to) {
    let [x1, y1] = from.match(/\d+/g);
    let [x2, y2] = to.match(/\d+/g);
    x1 = parseInt(x1);
    y1 = parseInt(y1);
    x2 = parseInt(x2);
    y2 = parseInt(y2);

    if ((x2 - x1) === 1) {
      return 'R';
    }
    if ((x2 - x1) === -1) {
      return 'L';
    }
    if ((y2 - y1) === 1) {
      return 'D';
    }
    if ((y2 - y1) === -1) {
      return 'U';
    }
  }

  bfsShortestPath(start, end) {
    const queue = new Queue();
    const visited = new Set();
    const searchPath = {};

    queue.enqueue(start);
    visited.add(start);

    while (!queue.isEmpty()) {
      const from = queue.dequeue();
      
      this.edges[from].filter(v => !visited.has(v)).forEach(v => {
        visited.add(v);
        searchPath[v] = searchPath[from] === undefined ? this.getDirection(from, v) : searchPath[from] + this.getDirection(from, v);
        queue.enqueue(v);
      });
    }

    return 'LLDDDR';
  }
}


describe('입력된 판을 기반으로 그래프를 생성한다', () => {
  let graph;
  let board;

  beforeEach(() => {
    graph = new Graph();
    board = [
      [1,1,1,1,1],
      [1,0,1,1,1],
      [1,0,0,0,1],
      [1,1,1,1,1],
      [1,1,0,1,1]
    ];
  });

  test('addVertex', () => {
    graph.addVertex('A');
    expect(graph.hasVertex('A')).toBeTruthy();
  });

  test('addEdge', () => {
    graph.addVertex('A');
    graph.addVertex('B');

    graph.addEdge('A', 'B');
    expect(graph.isConnected('A', 'B')).toBeTruthy();
  });

  test('createVertices', () => {
    graph.createVertices(board);
    expect(graph.hasVertex('(0, 0)')).toBeTruthy();
    expect(graph.hasVertex('(1, 1)')).toBeFalsy();
  });

  test('createGraph', () => {
    graph.createVertices(board);
    graph.createGraph();
    expect(graph.isConnected('(0, 0)', '(0, 1)')).toBeTruthy();

  });

  test('getMovablePoint', () => {
    graph.createVertices(board);
    graph.createGraph();
    expect(graph.getMovablePoint(1, 0)).toEqual(expect.arrayContaining(['(0, 0)', '(2, 0)']));
  });

  test('getDirection', () => {
    const from = '(2, 0)';
    const to = '(1, 0)';

    expect(graph.getDirection(from, to)).toEqual('L');
  });

  test('find shortestPath by bfs', () => {
    graph.createVertices(board);
    graph.createGraph();
    expect(graph.bfsShortestPath('(2, 0)', '(1, 3)')).toEqual('LLDDDR');
  });
  
});