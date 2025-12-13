
const knightMoves = (start, end) => {
    // Logic
}

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