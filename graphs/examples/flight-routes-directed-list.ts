import { DirectedAdjacencyList } from "../src/directed-adjacency-list.ts";

// Flight Routes (Directed, Weighted)
console.log("=== Flight Routes (Directed, Weighted) — Adjacency List ===\n");

const flights = new DirectedAdjacencyList([
  "NYC",
  "LON",
  "PAR",
  "DXB",
  "TYO",
  "SYD",
]);

// NYC ->
flights.addEdge("NYC", "LON", 450);
flights.addEdge("NYC", "PAR", 520);
flights.addEdge("NYC", "DXB", 780);

// LON ->
flights.addEdge("LON", "PAR", 120);
flights.addEdge("LON", "TYO", 650);

// PAR ->
flights.addEdge("PAR", "DXB", 400);

// DXB ->
flights.addEdge("DXB", "TYO", 550);
flights.addEdge("DXB", "SYD", 720);

// TYO ->
flights.addEdge("TYO", "SYD", 600);
flights.addEdge("TYO", "NYC", 900);

// SYD ->
flights.addEdge("SYD", "TYO", 580);

flights.display();

// NYC can fly to LON, but there's no direct LON -> NYC
console.log("\nNYC → LON?", flights.hasEdge("NYC", "LON"));
console.log("LON → NYC?", flights.hasEdge("LON", "NYC"));

console.log("\nNYC out-degree:", flights.getOutDegree("NYC"));
console.log("NYC in-degree:", flights.getInDegree("NYC"));

console.log("\nFlights from DXB:", flights.getOutNeighbors("DXB"));
console.log("Flights into TYO:", flights.getInNeighbors("TYO"));
