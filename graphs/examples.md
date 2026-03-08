# Graph Representations — Real-Life Examples

## Adjacency List Examples

### 1. Flight Routes (Directed, Weighted)

Nodes: NYC, LON, PAR, DXB, TYO, SYD

Edges (one-way flights with cost):

- NYC → LON ($450), NYC → PAR ($520), NYC → DXB ($780)
- LON → PAR ($120), LON → TYO ($650)
- PAR → DXB ($400)
- DXB → TYO ($550), DXB → SYD ($720)
- TYO → SYD ($600), TYO → NYC ($900)
- SYD → TYO ($580)

Note: Directed because NYC → LON doesn't guarantee LON → NYC at the same price or even existence.

### 2. Instagram Follow Graph (Directed, Unweighted)

Nodes: Alice, Bob, Charlie, Diana, Eve

Edges (X follows Y):

- Alice follows Bob, Charlie, Eve
- Bob follows Alice, Diana
- Charlie follows Alice
- Diana follows Bob, Charlie, Eve
- Eve follows Alice, Diana

Note: Directed because Alice following Bob doesn't mean Bob follows Alice.

### 3. Friend Network (Undirected, Unweighted)

Nodes: Alice, Bob, Charlie, Diana, Eve, Frank

Edges (mutual friendships):

- Alice — Bob, Alice — Charlie, Alice — Diana
- Bob — Charlie, Bob — Eve
- Charlie — Diana, Charlie — Frank
- Diana — Eve
- Eve — Frank

Note: Undirected because friendship is mutual.

### 4. Road Map with Distances (Undirected, Weighted)

Nodes: Home, School, Office, Mall, Park, Hospital

Edges (roads with distance in km):

- Home — School (2.5), Home — Park (1.8)
- School — Office (4.0), School — Mall (3.2)
- Office — Hospital (1.5), Office — Mall (2.0)
- Mall — Park (2.8)
- Park — Hospital (5.0)

Note: Undirected because roads go both ways. Good for practicing Dijkstra's shortest path.

---

## Adjacency Matrix Examples

### 5. Data Center Latency (Directed, Weighted)

Nodes (indexed 0–4): Mumbai, Singapore, Frankfurt, Virginia, São Paulo

Matrix (latency in ms, asymmetric because network paths differ):

|           | Mumbai | Singapore | Frankfurt | Virginia | São Paulo |
| --------- | ------ | --------- | --------- | -------- | --------- |
| Mumbai    | 0      | 45        | 120       | 190      | 280       |
| Singapore | 48     | 0         | 160       | 210      | 320       |
| Frankfurt | 125    | 165       | 0         | 85       | 220       |
| Virginia  | 195    | 215       | 82        | 0        | 140       |
| São Paulo | 285    | 325       | 225       | 135      | 0         |

Good for practicing Floyd-Warshall to find lowest latency routes.

### 6. Game Grid / Maze (Undirected, Unweighted)

A 5×5 grid where 1 = passable, 0 = wall:

```
1 1 0 1 1
1 0 0 1 0
1 1 1 1 1
0 0 1 0 1
1 1 1 1 1
```

Each cell connects to its passable up/down/left/right neighbors. Convert to a 25×25 adjacency matrix where matrix[i][j] = 1 if cells i and j are adjacent and both passable. Good for practicing BFS shortest path from top-left to bottom-right.

### 7. Team Skill Match (Bipartite, Weighted)

Candidates: Amit, Priya, Raj, Sneha
Roles: Frontend, Backend, DevOps, Data Eng

Suitability scores (0 = not qualified):

|       | Frontend | Backend | DevOps | Data Eng |
| ----- | -------- | ------- | ------ | -------- |
| Amit  | 85       | 70      | 0      | 60       |
| Priya | 0        | 90      | 80     | 75       |
| Raj   | 65       | 0       | 92     | 0        |
| Sneha | 78       | 85      | 55     | 95       |

Good for practicing greedy matching or the Hungarian algorithm.

---

## Which Representation to Use

- **Adjacency List** → Flight routes, social networks, dependency trees — anything sparse where most nodes connect to only a few others.
- **Adjacency Matrix** → Latency tables, game grids, matching problems — anything dense or where you need O(1) edge lookup and matrix-based algorithms.
