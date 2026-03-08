import { DirectedAdjacencyList } from "../src/directed-adjacency-list.ts";

// Instagram Follow Graph (Directed, Unweighted)
console.log("=== Instagram Follow Graph (Directed, Unweighted) — Adjacency List ===\n");

const instagram = new DirectedAdjacencyList([
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Eve",
]);

// Alice follows Bob, Charlie, Eve
instagram.addEdge("Alice", "Bob");
instagram.addEdge("Alice", "Charlie");
instagram.addEdge("Alice", "Eve");

// Bob follows Alice, Diana
instagram.addEdge("Bob", "Alice");
instagram.addEdge("Bob", "Diana");

// Charlie follows Alice
instagram.addEdge("Charlie", "Alice");

// Diana follows Bob, Charlie, Eve
instagram.addEdge("Diana", "Bob");
instagram.addEdge("Diana", "Charlie");
instagram.addEdge("Diana", "Eve");

// Eve follows Alice, Diana
instagram.addEdge("Eve", "Alice");
instagram.addEdge("Eve", "Diana");

instagram.display();

console.log("\nAlice follows Bob?", instagram.hasEdge("Alice", "Bob"));
console.log("Charlie follows Bob?", instagram.hasEdge("Charlie", "Bob"));

console.log("\nAlice — following:", instagram.getOutDegree("Alice"), "| followers:", instagram.getInDegree("Alice"));
console.log("Charlie — following:", instagram.getOutDegree("Charlie"), "| followers:", instagram.getInDegree("Charlie"));

console.log("\nWho does Diana follow?", instagram.getOutNeighbors("Diana"));
console.log("Who follows Alice?", instagram.getInNeighbors("Alice"));
