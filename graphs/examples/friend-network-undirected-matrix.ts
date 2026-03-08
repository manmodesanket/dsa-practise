import { AdjacencyMatrix } from "../src/adjacency-matrix.ts";

// Friend Network (Undirected, Unweighted)
console.log("=== Friend Network (Undirected, Unweighted) ===\n");

const friends = new AdjacencyMatrix([
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Eve",
  "Frank",
]);

friends.addEdge("Alice", "Bob");
friends.addEdge("Alice", "Charlie");
friends.addEdge("Alice", "Diana");
friends.addEdge("Bob", "Charlie");
friends.addEdge("Bob", "Eve");
friends.addEdge("Charlie", "Diana");
friends.addEdge("Charlie", "Frank");
friends.addEdge("Diana", "Eve");
friends.addEdge("Eve", "Frank");

friends.display();

console.log("\nAlice's neighbors:", friends.getNeighbors("Alice"));
console.log("Charlie's degree:", friends.getDegree("Charlie"));
console.log("Has edge Alice—Eve?", friends.hasEdge("Alice", "Eve"));
console.log("Has edge Alice—Bob?", friends.hasEdge("Alice", "Bob"));
