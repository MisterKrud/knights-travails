






class Node {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.neighbours = new Set([]);
    this.coordinates = [row, col];

  }
}

const visited = new Set([]);
// const adjacencyList = new Map();

//Get neighbours of square
const getNeighbours = ([row, col]) => {
  //Make a node of initial square
  let start = new Node(row, col);

  //Don't allow numbers outside of 0-7 in coordinates

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
    const coordModifiers = [
      [-1, 2],
      [1, 2],
      [-1, -2],
      [1, -2],
      [-2, 1],
      [2, 1],
      [-2, -1],
      [2, -1],
    ];
 
    for (let coord of coordModifiers) {
      const newRow = row + coord[0];
      const newCol = col + coord[1];
      if (newRow >= 0 && newRow <= 7 && newCol >= 0 && newCol <= 7) {
        const neighbourCoordinates = `${newRow},${newCol}`;
        if (!visited.has(neighbourCoordinates)) {
          const neighbour = new Node(newRow, newCol);
          start.neighbours.add(neighbour);
        }
      }
    }
  }
  return start;
};
  

const createData = ([row, col], [endRow, endCol]) => {
  visited.add(`${row},${col}`)
  const startCell = getNeighbours([row, col])
  const queueArray = [startCell];
const previous = new Map()
  while (queueArray.length >= 1) {
  
      
      let currentCell = queueArray.shift();;
      const neighbourList = currentCell.neighbours;
      const currentCoordinates = `${currentCell.row},${currentCell.col}`;
      const neighbourCoords = [];
    
     
      // adjacencyList.set(currentCoordinates, neighbourCoords);
      neighbourList.forEach((neighbour) => {
      
   
       
        const neighbourCoordinates = `${neighbour.row},${neighbour.col}`;
        
           if(neighbourCoordinates !== currentCoordinates) neighbourCoords.push(neighbourCoordinates);
        if (!visited.has(neighbourCoordinates)) {
           const newNeighbour = getNeighbours([neighbour.row, neighbour.col]);
           
         previous.set(neighbourCoordinates, currentCoordinates)
          
          visited.add(neighbourCoordinates);
       
          
       
           queueArray.push(newNeighbour);
        }
    




      });
       
 
 if (currentCell.row === endRow && currentCell.col === endCol) {
      let path = [currentCoordinates];
      while(previous.has(path[0])){
       
        path.unshift(previous.get(path[0]))
       
       
     
      }
 
      return path
    }
  }
  
};


const knightMoves=([row, col], [endRow, endCol])=>{
  const result = createData([row, col], [endRow, endCol]);

  const message = () => {
  console.log(`=> You made it in ${result.length} moves! Hre's your path:`)
  moves();
}

  const moves = ()  => result.forEach(move => {
   console.log(`[${move}]`)})

   return message()
  }
  



knightMoves([3,3],[7,7])
