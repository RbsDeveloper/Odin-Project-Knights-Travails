

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



const findNeighbours = (vertex) => {
    let neighbours = []
    moves.forEach((move)=>{
        let possibleNeighbour = [vertex[0]+move[0], vertex[1]+move[1]]
        if(inBounds(possibleNeighbour)){
            neighbours.push(possibleNeighbour)
        }
    })

    return neighbours
}

console.log(findNeighbours([0,0]));

const bfsTraversal = (startPoint) => {
    const visited = {};
    const queue = [startPoint];
    const result = [];

    visited[startPoint] = true;

    let dequeuedVertex
    while(queue.length) {
        dequeuedVertex = queue.shift();
        result.push(dequeuedVertex);
        dequeuedVertex.forEach(element => {
            if(!visited[element]){
                visited[element] = true;
                queue.push(element);
            }
        });
    }
    return result;

}

const knightMoves = (start, end) => {
    // Logic
}
