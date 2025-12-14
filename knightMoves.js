

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

//console.log(findNeighbours([2,1]));

const bfsTraversal = (startPoint, targetPoint) => {
    const visited = {};
    const queue = [startPoint];
    const parents = {};

    visited[startPoint] = true;

    let dequeuedVertex
    while(queue.length) {
       
        dequeuedVertex = queue.shift();

        for(const element of findNeighbours(dequeuedVertex)){
            if(!visited[element]){
                visited[element] = true;
                queue.push(element);
                parents[element] = dequeuedVertex;
                console.log(element, targetPoint)
            }
            if(`${element}` === `${targetPoint}`){
                    console.log('here it is')
                    return parents;
            }
        }
    }
   
}



const knightMoves = (start, end) => {
   const path =  bfsTraversal(start, end);
   console.log(path)
    const result = [end];

   const compilePath = (obj, prop) => {
    if(`${prop}` === `${start}`) return

    result.unshift(obj[prop])

    compilePath(obj, obj[prop])
    
   }

   compilePath(path, end)

   return result;
};

console.log(knightMoves([0,0],[3,4]))