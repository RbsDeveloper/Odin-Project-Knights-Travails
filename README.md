# Knight Travails

A JavaScript solution to the **Knight Travails** problem from [The Odin Project](https://www.theodinproject.com/).

The goal of this project is to calculate the **shortest path a knight can take** on a standard 8×8 chessboard from a starting square to a target square.

---

## 🧠 Problem Overview

A knight in chess moves in an “L” shape:
- two squares in one direction
- one square perpendicular to that direction

Given:
- a starting coordinate `[x, y]`
- an ending coordinate `[x, y]`

The program finds the **shortest possible sequence of moves** that takes the knight from start to end.

---

## 🛠️ Solution Approach

This problem is modeled as a **graph traversal**:

- Each square on the board is a node
- Each legal knight move is an edge
- The board is an unweighted graph

To guarantee the shortest path, the solution uses **Breadth-First Search (BFS)**.

### Key Steps:
1. Generate all legal knight moves from a given square
2. Run BFS from the starting square
3. Track parent squares to reconstruct the path
4. Stop when the target square is found

---

## 📁 Project Structure

- **`knightMoves(start, end)`**  
  Main function that validates input, runs BFS, and reconstructs the path.

- **`bfsTraversal(start, end)`**  
  Performs a BFS and returns a parent map for path reconstruction.

- **`getNeighbors(square)`**  
  Returns all valid knight moves from a given square.

- **`inBounds(coord)`**  
  Checks whether a coordinate is within the 8×8 board.

---

## ▶️ Usage

Call the `knightMoves` function with a start and end coordinate:

```js
knightMoves([0, 0], [3, 4]);