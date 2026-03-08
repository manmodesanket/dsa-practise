/**
 * Adjacency List representation for Undirected Graphs
 * Supports both weighted and unweighted graphs
 *
 * Each node maps to an array of { node, weight } neighbors.
 * addEdge(A, B) adds to both A's and B's lists (symmetric).
 */

interface Neighbor {
  node: string;
  weight: number;
}

class AdjacencyList {
  adjacencyList: Map<string, Neighbor[]>;

  constructor(nodes: string[]) {
    this.adjacencyList = new Map();
    for (const node of nodes) {
      this.adjacencyList.set(node, []);
    }
  }

  // Add an undirected edge (adds to both lists)
  addEdge(node1: string, node2: string, weight: number = 1): void {
    this.adjacencyList.get(node1)!.push({ node: node2, weight });
    this.adjacencyList.get(node2)!.push({ node: node1, weight });
  }

  // Remove an undirected edge
  removeEdge(node1: string, node2: string): void {
    const list1 = this.adjacencyList.get(node1)!;
    const list2 = this.adjacencyList.get(node2)!;
    this.adjacencyList.set(
      node1,
      list1.filter((n) => n.node !== node2),
    );
    this.adjacencyList.set(
      node2,
      list2.filter((n) => n.node !== node1),
    );
  }

  // Check if an edge exists between two nodes
  hasEdge(node1: string, node2: string): boolean {
    return this.adjacencyList.get(node1)!.some((n) => n.node === node2);
  }

  // Get all neighbors of a node
  getNeighbors(node: string): Neighbor[] {
    return this.adjacencyList.get(node)!;
  }

  // Get the degree (number of connections) of a node
  getDegree(node: string): number {
    return this.adjacencyList.get(node)!.length;
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

export { AdjacencyList };
export type { Neighbor };
