/**
 * Adjacency Matrix representation for Directed Graphs
 * Supports both weighted and unweighted graphs
 *
 * Key difference from undirected: matrix is NOT symmetric
 * addEdge(A, B) sets matrix[A][B] only, NOT matrix[B][A]
 */

interface Neighbor {
  node: string;
  weight: number;
}

class DirectedAdjacencyMatrix {
  nodes: string[];
  size: number;
  nodeIndex: Record<string, number>;
  matrix: number[][];

  constructor(nodes: string[]) {
    this.nodes = nodes;
    this.size = nodes.length;
    this.nodeIndex = {};
    nodes.forEach((node, i) => {
      this.nodeIndex[node] = i;
    });
    this.matrix = Array.from({ length: this.size }, () =>
      new Array(this.size).fill(0),
    );
  }

  // Add a directed edge from -> to (sets only matrix[from][to])
  addEdge(from: string, to: string, weight: number = 1): void {
    const i = this.nodeIndex[from];
    const j = this.nodeIndex[to];
    this.matrix[i][j] = weight;
  }

  // Remove a directed edge from -> to
  removeEdge(from: string, to: string): void {
    const i = this.nodeIndex[from];
    const j = this.nodeIndex[to];
    this.matrix[i][j] = 0;
  }

  // Check if a directed edge exists from -> to
  hasEdge(from: string, to: string): boolean {
    const i = this.nodeIndex[from];
    const j = this.nodeIndex[to];
    return this.matrix[i][j] !== 0;
  }

  // Get all outgoing neighbors of a node
  getOutNeighbors(node: string): Neighbor[] {
    const i = this.nodeIndex[node];
    const neighbors: Neighbor[] = [];
    for (let j = 0; j < this.size; j++) {
      if (this.matrix[i][j] !== 0) {
        neighbors.push({ node: this.nodes[j], weight: this.matrix[i][j] });
      }
    }
    return neighbors;
  }

  // Get all incoming neighbors of a node
  getInNeighbors(node: string): Neighbor[] {
    const j = this.nodeIndex[node];
    const neighbors: Neighbor[] = [];
    for (let i = 0; i < this.size; i++) {
      if (this.matrix[i][j] !== 0) {
        neighbors.push({ node: this.nodes[i], weight: this.matrix[i][j] });
      }
    }
    return neighbors;
  }

  // Out-degree: number of edges going OUT from this node (non-zero in row)
  getOutDegree(node: string): number {
    const i = this.nodeIndex[node];
    let count = 0;
    for (let j = 0; j < this.size; j++) {
      if (this.matrix[i][j] !== 0) count++;
    }
    return count;
  }

  // In-degree: number of edges coming IN to this node (non-zero in column)
  getInDegree(node: string): number {
    const j = this.nodeIndex[node];
    let count = 0;
    for (let i = 0; i < this.size; i++) {
      if (this.matrix[i][j] !== 0) count++;
    }
    return count;
  }

  // Print the matrix in a readable format
  display(): void {
    const colWidth = Math.max(...this.nodes.map((n) => n.length), 4) + 2;
    const pad = (str: string, len: number) => str.padEnd(len);

    console.log(
      pad("", colWidth) + this.nodes.map((n) => pad(n, colWidth)).join(""),
    );
    console.log("-".repeat(colWidth + this.size * colWidth));

    for (let i = 0; i < this.size; i++) {
      const row = this.matrix[i]
        .map((val) => pad(String(val), colWidth))
        .join("");
      console.log(pad(this.nodes[i], colWidth) + row);
    }
  }
}

export { DirectedAdjacencyMatrix };
export type { Neighbor };
