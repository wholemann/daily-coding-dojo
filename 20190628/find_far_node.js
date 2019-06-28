/* 프로그래머스 그래프 - '가장 먼 노드' */

function assertEqual(a, b) {
  console.log("a is equal b : ", a === b ? true : false);
}

function assertArrayEqual(a, b) {
  console.log("[array] a is equal b : ", JSON.stringify(a)==JSON.stringify(b) ? true : false);
}

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
  
  createVertex(n) {
      this.vertices = [...Array(n).fill(null).map((v, i) => i + 1)];
      this.vertices.forEach(v => this.edges[v] = []);
      return this.vertices;
  }
  
  hasVertex(vertex) {
      return this.vertices.includes(vertex);
  }
  
  addEdge(from, to) {
      this.edges[from].push(to);
      this.edges[to].push(from);
  }
  
  isConnected(from, to) {
      return this.edges[from].includes(to);
  }
  
  bfsShortestPath(start) {
      const q = new Queue();
      const visited = new Set();
      const distances = {};
      
      q.enqueue(start);
      visited.add(start);
      
      while (!q.isEmpty()) {
          const from = q.dequeue();
      
          this.edges[from].filter(v => !visited.has(v))
          .forEach(v => {
              visited.add(v);
              q.enqueue(v);
              distances[v] = distances[from] === undefined ? 1 : distances[from] + 1;
          });
      }
      
      const arr = Object.values(distances);
      const max = Math.max(...arr);
      
      return arr.filter(v => v === max).length;
      
  }
}

function solution(n, edge) {
  const graph = new Graph();
  graph.createVertex(n);
  edge.forEach(([from, to]) => graph.addEdge(from, to));
  
  let answer = graph.bfsShortestPath(1);
  
  return answer;
}