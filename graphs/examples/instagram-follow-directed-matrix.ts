import { DirectedAdjacencyMatrix } from "../src/directed-adjacency-matrix.ts";

// Instagram Follow Graph (Directed, Unweighted)
console.log("=== Instagram Follow Graph (Directed, Unweighted) ===\n");

const instagram = new DirectedAdjacencyMatrix([
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

// Notice: Alice follows Bob, and Bob follows Alice — but that's two separate edges
console.log("\nAlice follows Bob?", instagram.hasEdge("Alice", "Bob"));
console.log("Bob follows Alice?", instagram.hasEdge("Bob", "Alice"));

// Charlie follows Alice, but Alice does NOT follow Charlie back
console.log("\nAlice follows Charlie?", instagram.hasEdge("Alice", "Charlie"));
console.log("Charlie follows Alice?", instagram.hasEdge("Charlie", "Alice"));
console.log(
  "Charlie follows Bob?",
  instagram.hasEdge("Charlie", "Bob"),
  "(one-way only)\n",
);

// Out-degree = who you follow, In-degree = your followers
console.log("Alice — following:", instagram.getOutDegree("Alice"), "| followers:", instagram.getInDegree("Alice"));
console.log("Charlie — following:", instagram.getOutDegree("Charlie"), "| followers:", instagram.getInDegree("Charlie"));
console.log("Diana — following:", instagram.getOutDegree("Diana"), "| followers:", instagram.getInDegree("Diana"));

console.log("\nWho does Alice follow?", instagram.getOutNeighbors("Alice"));
console.log("Who follows Alice?", instagram.getInNeighbors("Alice"));
