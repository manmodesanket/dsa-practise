import { DirectedAdjacencyMatrix } from "../src/directed-adjacency-matrix.ts";

// Data Center Latency (Directed, Weighted)
console.log("=== Data Center Latency (Directed, Weighted) ===\n");

const dataCenter = new DirectedAdjacencyMatrix([
  "Mumbai",
  "Singapore",
  "Frankfurt",
  "Virginia",
  "São Paulo",
]);

// Mumbai ->
dataCenter.addEdge("Mumbai", "Singapore", 45);
dataCenter.addEdge("Mumbai", "Frankfurt", 120);
dataCenter.addEdge("Mumbai", "Virginia", 190);
dataCenter.addEdge("Mumbai", "São Paulo", 280);

// Singapore ->
dataCenter.addEdge("Singapore", "Mumbai", 48);
dataCenter.addEdge("Singapore", "Frankfurt", 160);
dataCenter.addEdge("Singapore", "Virginia", 210);
dataCenter.addEdge("Singapore", "São Paulo", 320);

// Frankfurt ->
dataCenter.addEdge("Frankfurt", "Mumbai", 125);
dataCenter.addEdge("Frankfurt", "Singapore", 165);
dataCenter.addEdge("Frankfurt", "Virginia", 85);
dataCenter.addEdge("Frankfurt", "São Paulo", 220);

// Virginia ->
dataCenter.addEdge("Virginia", "Mumbai", 195);
dataCenter.addEdge("Virginia", "Singapore", 215);
dataCenter.addEdge("Virginia", "Frankfurt", 82);
dataCenter.addEdge("Virginia", "São Paulo", 140);

// São Paulo ->
dataCenter.addEdge("São Paulo", "Mumbai", 285);
dataCenter.addEdge("São Paulo", "Singapore", 325);
dataCenter.addEdge("São Paulo", "Frankfurt", 225);
dataCenter.addEdge("São Paulo", "Virginia", 135);

dataCenter.display();

// Asymmetric latency — notice the difference in both directions
console.log(
  "\nMumbai → Singapore:",
  dataCenter.matrix[dataCenter.nodeIndex["Mumbai"]][dataCenter.nodeIndex["Singapore"]],
  "ms",
);
console.log(
  "Singapore → Mumbai:",
  dataCenter.matrix[dataCenter.nodeIndex["Singapore"]][dataCenter.nodeIndex["Mumbai"]],
  "ms",
);

console.log(
  "\nFrankfurt → Virginia:",
  dataCenter.matrix[dataCenter.nodeIndex["Frankfurt"]][dataCenter.nodeIndex["Virginia"]],
  "ms",
);
console.log(
  "Virginia → Frankfurt:",
  dataCenter.matrix[dataCenter.nodeIndex["Virginia"]][dataCenter.nodeIndex["Frankfurt"]],
  "ms",
);

console.log("\nOutgoing from Mumbai:", dataCenter.getOutNeighbors("Mumbai"));
console.log("Incoming to Virginia:", dataCenter.getInNeighbors("Virginia"));
