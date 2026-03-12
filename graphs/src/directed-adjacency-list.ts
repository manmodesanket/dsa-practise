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

  addEdge(from: string, to: string, weight: number = 1): void {
    this.adjacencyList.get(from)!.push({ node: to, weight });
  }

  removeEdge(from: string, to: string): void {
    const list = this.adjacencyList.get(from)!;
    this.adjacencyList.set(
      from,
      list.filter((n) => n.node !== to),
    );
  }

  hasEdge(from: string, to: string): boolean {
    return this.adjacencyList.get(from)!.some((n) => n.node === to);
  }

  getOutNeighbors(node: string): Neighbor[] {
    return this.adjacencyList.get(node)!;
  }

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

  getOutDegree(node: string): number {
    return this.adjacencyList.get(node)!.length;
  }

  getInDegree(node: string): number {
    let count = 0;
    for (const [, neighbors] of this.adjacencyList) {
      for (const n of neighbors) {
        if (n.node === node) count++;
      }
    }
    return count;
  }

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
