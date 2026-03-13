interface Neighbor {
  node: string;
  weight: number;
}

class AdjacencyMatrix {
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

  // Add an undirected edge (sets both [i][j] and [j][i])
  addEdge(node1: string, node2: string, weight: number = 1): void {
    const i = this.nodeIndex[node1];
    const j = this.nodeIndex[node2];
    this.matrix[i][j] = weight;
    this.matrix[j][i] = weight; // symmetric for undirected
  }

  // Remove an undirected edge
  removeEdge(node1: string, node2: string): void {
    const i = this.nodeIndex[node1];
    const j = this.nodeIndex[node2];
    this.matrix[i][j] = 0;
    this.matrix[j][i] = 0;
  }

  // Check if an edge exists between two nodes
  hasEdge(node1: string, node2: string): boolean {
    const i = this.nodeIndex[node1];
    const j = this.nodeIndex[node2];
    return this.matrix[i][j] !== 0;
  }

  // Get all neighbors of a node
  getNeighbors(node: string): Neighbor[] {
    const i = this.nodeIndex[node];
    const neighbors: Neighbor[] = [];
    for (let j = 0; j < this.size; j++) {
      if (this.matrix[i][j] !== 0) {
        neighbors.push({ node: this.nodes[j], weight: this.matrix[i][j] });
      }
    }
    return neighbors;
  }

  // Get the degree (number of connections) of a node
  getDegree(node: string): number {
    const i = this.nodeIndex[node];
    let count = 0;
    for (let j = 0; j < this.size; j++) {
      if (this.matrix[i][j] !== 0) count++;
    }
    return count;
  }

  // Print the matrix in a readable format
  display(): void {
    const maxLabel = Math.max(...this.nodes.map((n) => n.length));
    const pad = (str: string, len: number) => str.padEnd(len);

    console.log(
      pad("", maxLabel + 2) + this.nodes.map((n) => pad(n, 8)).join(""),
    );
    console.log("-".repeat(maxLabel + 2 + this.size * 8));

    for (let i = 0; i < this.size; i++) {
      const row = this.matrix[i].map((val) => pad(String(val), 8)).join("");
      console.log(pad(this.nodes[i], maxLabel + 2) + row);
    }
  }

  dfsTraversal() {
    const visited = new Set<number>();
    const provinces: Set<number>[] = [];
    for (let i = 0; i < this.matrix.length; i++) {
      if (!visited.has(i)) {
        const provinceVisited = new Set<number>();
        this.dfs(this.matrix, i, provinceVisited);
        for (const node of provinceVisited) {
          visited.add(node);
        }
        provinces.push(provinceVisited);
      }
    }
    return { provinces };
  }

  dfs(matrix: number[][], row: number, visited: Set<number>): void {
    visited.add(row);
    for (let j = 0; j < matrix[row].length; j++) {
      if (matrix[row][j] === 1 && !visited.has(j)) {
        this.dfs(matrix, j, visited);
      }
    }
  }
}

export { AdjacencyMatrix };
export type { Neighbor };
