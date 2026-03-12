
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
      
  addEdge(from: string, to: string, weight: number = 1): void {
    const i = this.nodeIndex[from];
    const j = this.nodeIndex[to];
    this.matrix[i][j] = weight;
  }

  removeEdge(from: string, to: string): void {
    const i = this.nodeIndex[from];
    const j = this.nodeIndex[to];
    this.matrix[i][j] = 0;
  }

  hasEdge(from: string, to: string): boolean {
    const i = this.nodeIndex[from];
    const j = this.nodeIndex[to];
    return this.matrix[i][j] !== 0;
  }

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

  getOutDegree(node: string): number {
    const i = this.nodeIndex[node];
    let count = 0;
    for (let j = 0; j < this.size; j++) {
      if (this.matrix[i][j] !== 0) count++;
    }
    return count;
  }

  getInDegree(node: string): number {
    const j = this.nodeIndex[node];
    let count = 0;
    for (let i = 0; i < this.size; i++) {
      if (this.matrix[i][j] !== 0) count++;
    }
    return count;
  }

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
