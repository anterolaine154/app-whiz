/* 
Filename: sophisticated_code.js 
Content: 
This code implements a complex data structure in JavaScript called a Graph. It provides various methods for manipulating the graph, including adding and removing nodes and edges, checking for connectivity between nodes, finding the shortest path between two nodes using Dijkstra's algorithm, and more. The code is highly optimized and follows best practices for data structures and algorithms in JavaScript.
*/

class Graph {
  constructor() {
    this.nodes = new Map();
    this.edges = new Map();
  }

  addNode(node) {
    if (!this.nodes.has(node)) {
      this.nodes.set(node, []);
    }
  }

  removeNode(node) {
    this.nodes.delete(node);
  }

  addEdge(nodeA, nodeB, weight) {
    if (this.nodes.has(nodeA) && this.nodes.has(nodeB)) {
      this.edges.set(nodeA + "-" + nodeB, weight);
      this.edges.set(nodeB + "-" + nodeA, weight);
      this.nodes.get(nodeA).push(nodeB);
      this.nodes.get(nodeB).push(nodeA);
    }
  }

  removeEdge(nodeA, nodeB) {
    if (this.nodes.has(nodeA) && this.nodes.has(nodeB)) {
      this.edges.delete(nodeA + "-" + nodeB);
      this.edges.delete(nodeB + "-" + nodeA);
      const indexA = this.nodes.get(nodeA).indexOf(nodeB);
      if (indexA !== -1) this.nodes.get(nodeA).splice(indexA, 1);
      const indexB = this.nodes.get(nodeB).indexOf(nodeA);
      if (indexB !== -1) this.nodes.get(nodeB).splice(indexB, 1);
    }
  }

  isConnected(nodeA, nodeB) {
    if (!this.nodes.has(nodeA) || !this.nodes.has(nodeB)) return false;
    const visited = new Set();
    const queue = [nodeA];
    while (queue.length > 0) {
      const currentNode = queue.shift();
      visited.add(currentNode);
      const neighbors = this.nodes.get(currentNode);
      if (neighbors.includes(nodeB)) return true;
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) queue.push(neighbor);
      }
    }
    return false;
  }

  dijkstraShortestPath(startNode, endNode) {
    if (!this.nodes.has(startNode) || !this.nodes.has(endNode)) return [];
    const distances = new Map();
    const previous = new Map();
    const unvisited = new Set();
    for (const node of this.nodes.keys()) {
      distances.set(node, Infinity);
      previous.set(node, null);
      unvisited.add(node);
    }
    distances.set(startNode, 0);

    while (unvisited.size > 0) {
      const closestNode = this.getClosestNode(unvisited, distances);
      unvisited.delete(closestNode);

      if (closestNode === endNode) {
        return this.buildPath(previous, endNode);
      }

      const neighbors = this.nodes.get(closestNode);
      for (const neighbor of neighbors) {
        const distance = distances.get(closestNode) + this.edges.get(closestNode + "-" + neighbor);
        if (distance < distances.get(neighbor)) {
          distances.set(neighbor, distance);
          previous.set(neighbor, closestNode);
        }
      }
    }
    return [];
  }

  getClosestNode(unvisited, distances) {
    let minDistance = Infinity;
    let closestNode;
    for (const node of unvisited) {
      if (distances.get(node) < minDistance) {
        minDistance = distances.get(node);
        closestNode = node;
      }
    }
    return closestNode;
  }

  buildPath(previous, endNode) {
    const path = [endNode];
    let currentNode = endNode;
    while (previous.has(currentNode) && previous.get(currentNode) !== null) {
      currentNode = previous.get(currentNode);
      path.unshift(currentNode);
    }
    return path;
  }
}

// Usage example
const graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "D", 5);
graph.addEdge("C", "D", 1);
graph.addEdge("D", "E", 3);

console.log(graph.isConnected("A", "E")); // Output: true

const shortestPath = graph.dijkstraShortestPath("A", "E");
console.log(shortestPath); // Output: ["A", "C", "D", "E"]