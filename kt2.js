class Node {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.neighbours = new Set([]);
    this.coordinates = [row, col];
  }
}
const visited = new Set([])
const adjacencyList = new Map()

class Board{
  constructor([row, col], [endRow, endCol]){
    this.start = createData([row, col], [endRow, endCol])
  }
  countMoves(){
   let startingCell = this.start;

  }
}


//Get neighbours of square
const getNeighbours = ([row, col], [endRow, endCol]) => {
  
  //Make a node of initial square
  let start = new Node(row, col);
  //add it to 'visited' set
 

  //Don't allow numbers outside of 0-7 in coordinates
  const neighbourSet = new Set([]);
  const neighbourCoords = []
  if (
    row < 0 ||
    row > 7 ||
    row === undefined ||
    col === undefined ||
    col > 7 ||
    col === undefined
  ) {
    console.log(`Coordinates must be between 0 & 7`);
  } else {

//Get neighbours coordinates by adding +/-1 & +/-2 to coordinates
  const coordModifiers = [[-1, 2], [1, 2], [-1, -2], [1, -2], [-2, 1], [2, 1], [-2, -1], [2, -1]];
   const startCoordinates = (JSON.stringify(start.row)+','+JSON.stringify(start.col))
    visited.add(startCoordinates);
      for (let coord of coordModifiers) {
      const newRow = row+coord[0];
      const newCol = col+coord[1];
      if(newRow >=0 && newRow <=7 && newCol >=0 && newCol <=7){
      if(newRow === endRow && newCol === endCol){
        console.log(newRow, newCol)
      }
      
      const neighbour = new Node(newRow, newCol)
      start.neighbours.add(neighbour)
      
    
    
       const neighbourCoordinates = JSON.stringify(neighbour.row)+','+JSON.stringify(neighbour.col);
       console.log(`START AND NEIGHBOUR COORDINATES`)
       console.log(neighbourCoordinates)
       console.log(startCoordinates)
          if (!visited.has(neighbourCoordinates)) {
       neighbourSet.add([neighbourCoordinates]);
          neighbourCoords.push([neighbour.row, neighbour.col])
          visited.add(neighbourCoordinates);
         }
         
      }
    }
   adjacencyList.set(startCoordinates, neighbourCoords);
  }
  console.log(`Neighbour set`)
  console.log(neighbourSet)
 
  



 return start;
};


const createData = ([row, col], [endRow, endCol]) => {
   //Make a node of initial square
  let start = getNeighbours([row, col], [endRow, endCol]);
  //add it to 'visited' set
  const queueArray =[start];
  while(queueArray.length>=1){
    if(queueArray[0].row = endRow && queueArray[0].col === endCol){ 
      return
    }

    if(queueArray[0].neighbours !== null){
      const neighbourList = queueArray[0].neighbours  
     neighbourList.forEach(neighbour => {
        const newNeighbour = getNeighbours([neighbour.row, neighbour.col], [endRow, endCol])
        queueArray.push(newNeighbour)
      })
    } 
    queueArray.shift(queueArray[0])  
  }
 return start
}

  

console.log(createData([3,3],[2,5]))
console.log(`<<<<<<<<<<<<<<<<<<<<<<<ALL MOVES>>>>>>>>>>>>>>>>>>>>>>>`)

console.log(`-----------------------`)
console.log(adjacencyList)

console.log(visited)
console.log(`%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%`)















