/**
 * Adjacency List representation for Directed Graphs
 * Supports both weighted and unweighted graphs
 *
 * Each node maps to an array of { node, weight } neighbors.
 * addEdge(A, B) only adds B to A's list (one-way).
 */

interface Neighbor {
  node: string;
  weight: number;
}

class DirectedAdjacencyList {
  adjacencyList: Map<string, Neighbor[]>;

  constructor(nodes: string[]) {
    this.adjacencyList = new Map();
    for (const node of nodes) {
      this.adjacencyList.set(node, []);
    }
  }

  // Add a directed edge from -> to (adds only to from's list)
  addEdge(from: string, to: string, weight: number = 1): void {
    this.adjacencyList.get(from)!.push({ node: to, weight });
  }

  // Remove a directed edge from -> to
  removeEdge(from: string, to: string): void {
    const list = this.adjacencyList.get(from)!;
    this.adjacencyList.set(
      from,
      list.filter((n) => n.node !== to),
    );
  }

  // Check if a directed edge exists from -> to
  hasEdge(from: string, to: string): boolean {
    return this.adjacencyList.get(from)!.some((n) => n.node === to);
  }

  // Get all outgoing neighbors of a node
  getOutNeighbors(node: string): Neighbor[] {
    return this.adjacencyList.get(node)!;
  }

  // Get all incoming neighbors of a node
  getInNeighbors(node: string): Neighbor[] {
    const incoming: Neighbor[] = [];
    for (const [source, neighbors] of this.adjacencyList) {
      for (const n of neighbors) {
        if (n.node === node) {
          incoming.push({ node: source, weight: n.weight });
        }
      }
    }
    return incoming;
  }

  // Out-degree: number of edges going OUT from this node
  getOutDegree(node: string): number {
    return this.adjacencyList.get(node)!.length;
  }

  // In-degree: number of edges coming IN to this node
  getInDegree(node: string): number {
    let count = 0;
    for (const [, neighbors] of this.adjacencyList) {
      for (const n of neighbors) {
        if (n.node === node) count++;
      }
    }
    return count;
  }

  // Print the adjacency list
  display(): void {
    for (const [node, neighbors] of this.adjacencyList) {
      const edges = neighbors
        .map((n) => (n.weight === 1 ? n.node : `${n.node}(${n.weight})`))
        .join(", ");
      console.log(`${node} → ${edges || "(none)"}`);
    }
  }
}

export { DirectedAdjacencyList };
export type { Neighbor };
