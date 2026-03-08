import { AdjacencyList } from "../src/adjacency-list.ts";

// Road Map with Distances (Undirected, Weighted)
console.log("=== Road Map with Distances (Undirected, Weighted) — Adjacency List ===\n");

const roads = new AdjacencyList([
  "Home",
  "School",
  "Office",
  "Mall",
  "Park",
  "Hospital",
]);

roads.addEdge("Home", "School", 2.5);
roads.addEdge("Home", "Park", 1.8);
roads.addEdge("School", "Office", 4.0);
roads.addEdge("School", "Mall", 3.2);
roads.addEdge("Office", "Hospital", 1.5);
roads.addEdge("Office", "Mall", 2.0);
roads.addEdge("Mall", "Park", 2.8);
roads.addEdge("Park", "Hospital", 5.0);

roads.display();

console.log("\nHome's neighbors:", roads.getNeighbors("Home"));
console.log("Office's degree:", roads.getDegree("Office"));
