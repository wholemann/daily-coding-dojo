
class Graph {

  constructor() {
    this.edges = {};
    this.vertices = [];
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
    this.edges[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.edges[vertex1].push(vertex2);
    this.edges[vertex2].push(vertex1);
  }

  addDirectedEdge(vertex1, vertex2) {
    this.edges[vertex1].push(vertex2);
  }

  printGraph() {
    return this.vertices
      .map(
        (vertex) => 
          `${vertex} => ${this.edges[vertex].join(' ')}`
        )
      .join('\n');
  }
}

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test('graph is exist', () => {
    expect(graph).toBeDefined();
  });

  test('addVertex', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    expect(graph.vertices.includes('A')).toBeTruthy();
    expect(graph.vertices.includes('B')).toBeTruthy();
  });

  test('AddEdge', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');

    expect(graph.edges['A'].includes('B')).toBeTruthy();
    expect(graph.edges['B'].includes('A')).toBeTruthy();
  });

  test('AddDirectedEdge', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addDirectedEdge('A', 'B');

    expect(graph.edges['A'].includes('B')).toBeTruthy();
    expect(graph.edges['B'].includes('A')).toBeFalsy();
  });

  test('printGraph() with UndirectedEdges', () => {
    const vertices = ['A', 'B', 'C', 'D', 'E'];
    vertices.forEach(vertex => {
      graph.addVertex(vertex);
    });

    const edges = [['A', 'B'], ['A', 'C'], ['A', 'E'], ['B', 'D'], ['C', 'D']];
    edges.forEach(edge => {
      graph.addEdge(...edge);
    });

    expect(graph.printGraph()).toEqual(
      `A => B C E
B => A D
C => A D
D => B C
E => A`
    );
  });

  test('printGraph() with DirectedEdges', () => {
    const vertices = ['A', 'B', 'C', 'D', 'E'];
    vertices.forEach(vertex => {
      graph.addVertex(vertex);
    });

    const edges = [['A', 'B'], ['A', 'C'], ['A', 'E'], ['B', 'D'], ['C', 'D']];
    edges.forEach(edge => {
      graph.addDirectedEdge(...edge);
    });

    expect(graph.printGraph()).toEqual(
      `A => B C E
B => D
C => D
D => 
E => `
    );
  });
});

describe('BFS', () => {
  
});