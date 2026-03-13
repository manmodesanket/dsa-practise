// import { AdjacencyMatrix } from "../src/adjacency-matrix.ts";

// // Friend Network (Undirected, Unweighted)
// console.log("=== Friend Network (Undirected, Unweighted) ===\n");

// const friends = new AdjacencyMatrix([
//   "Alice",
//   "Bob",
//   "Charlie",
//   "Diana",
//   "Eve",
//   "Frank",
// ]);

// friends.addEdge("Alice", "Bob");
// friends.addEdge("Alice", "Charlie");
// friends.addEdge("Alice", "Diana");
// friends.addEdge("Bob", "Charlie");
// friends.addEdge("Bob", "Eve");
// friends.addEdge("Charlie", "Diana");
// friends.addEdge("Charlie", "Frank");
// friends.addEdge("Diana", "Eve");
// friends.addEdge("Eve", "Frank");

// friends.display();

// console.log("\nAlice's neighbors:", friends.getNeighbors("Alice"));
// console.log("Charlie's degree:", friends.getDegree("Charlie"));
// console.log("Has edge Alice—Eve?", friends.hasEdge("Alice", "Eve"));
// console.log("Has edge Alice—Bob?", friends.hasEdge("Alice", "Bob"));

// console.log("DFS Traversal:", friends.dfsTraversal());

import { AdjacencyMatrix } from "../src/adjacency-matrix.ts";
 
// ============================================
// Test 3: Two separate groups (2 provinces)
// Same as our Number of Provinces test case
// ============================================
console.log("\n=== Test 3: Two Provinces ===\n");
 
const cities = new AdjacencyMatrix([
  "City0",
  "City1",
  "City2",
  "City3",
  "City4",
]);
 
cities.addEdge("City0", "City1");
cities.addEdge("City2", "City3");
cities.addEdge("City3", "City4");
 
cities.display();
console.log("DFS Traversal:", cities.dfsTraversal());
// Expected: 2 provinces — {City0, City1} and {City2, City3, City4}
 