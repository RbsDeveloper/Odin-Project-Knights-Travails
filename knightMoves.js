
// Those are the possible moves for the knight
const moves = [
    [+1, +2],
    [+1, -2],
    [-1, -2],
    [-1, +2],
    [+2, +1],
    [+2, -1],
    [-2, +1],
    [-2, -1]
]

// Returns true if a coordinate is a valid square on the 8x8 board.
const inBounds = ([x,y]) => {
    if(Number.isInteger(x) && Number.isInteger(y)){
        if(x >= 0 && x < 8 && y>= 0 && y < 8){
            return true
        }else{
            return false
        }

    }

    return false
}

// Returns all legal knight moves from the given square.
const getNeighbors = (vertex) => {
    let neighbors = []
    moves.forEach((move)=>{
        let possibleNeighbor = [vertex[0]+move[0], vertex[1]+move[1]]
        if(inBounds(possibleNeighbor)){
            neighbors.push(possibleNeighbor)
        }
    })

    return neighbors
}

// Converts a coordinate into a stable string key
const transformKey = ([x,y]) => `${x},${y}`;

// Runs BFS from startPoint until targetPoint is found.
// Returns a parents map (childKey -> parentCoord) for path reconstruction.
const bfsTraversal = (startPoint, targetPoint) => {
    const visited = {};
    const queue = [startPoint];
    const parents = {};

    visited[transformKey(startPoint)] = true;

    let dequeuedVertex
    while(queue.length) {
       
        dequeuedVertex = queue.shift();

        for(const element of getNeighbors(dequeuedVertex)){
            if(!visited[transformKey(element)]){
                visited[transformKey(element)] = true;
                queue.push(element);
                parents[transformKey(element)] = dequeuedVertex;
            }
            if(transformKey(element) === transformKey(targetPoint)){
                    return parents;
            }
        }
    }
   return undefined
}


// Finds the shortest sequence of knight moves from start to end.
const knightMoves = (start, end) => {
    if(!inBounds(start) || !inBounds(end)) return null;

    if(transformKey(start) === transformKey(end)) return [start];

    const parents =  bfsTraversal(start, end);
    const result = [end];
    
    // Reconstructs the path by walking backwards through the parents map.
    const buildPath = (parents, currentKey) => {
    if(currentKey === transformKey(start)) return

    const parentCoord = parents[currentKey];

    result.unshift(parentCoord)

    buildPath(parents, transformKey(parentCoord))
    
   }

   buildPath(parents, transformKey(end))

   return result;
};

console.log(knightMoves([0,0],[3,4]))