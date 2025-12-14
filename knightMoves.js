

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

const transformKey = ([x,y]) => `${x},${y}`;

//console.log(findNeighbours([2,1]));

const bfsTraversal = (startPoint, targetPoint) => {
    const visited = {};
    const queue = [startPoint];
    const parents = {};

    visited[transformKey(startPoint)] = true;

    let dequeuedVertex
    while(queue.length) {
       
        dequeuedVertex = queue.shift();

        for(const element of findNeighbours(dequeuedVertex)){
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



const knightMoves = (start, end) => {
    if(!inBounds(start) || !inBounds(end)) return null;

    if(transformKey(start) === transformKey(end)) return [start];

    const path =  bfsTraversal(start, end);
    const result = [end];

    const compilePath = (parents, currentKey) => {
    if(currentKey === transformKey(start)) return

    const parentCoord = parents[currentKey];

    result.unshift(parentCoord)

    compilePath(parents, transformKey(parentCoord))
    
   }

   compilePath(path, transformKey(end))

   return result;
};

console.log(knightMoves([0,0],[3,4]))