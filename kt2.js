



class Board{
  constructor([row, col], [endRow, endCol]){
    this.start = createData([row, col], [endRow, endCol])
  }
  countMoves(){
   let startingCell = this.start;

  }
}


class Node {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.neighbours = new Set([]);
    this.coordinates = [row, col];
  }
}

const visited = new Set([]);
const adjacencyList = new Map();

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
        const neighbourCoordinates = `${newRow}, ${newCol}`;
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
  visited.add(`${row}, ${col}`)
  const queueArray = [getNeighbours([row, col])];

  while (queueArray.length >= 1) {
  
      
      const currentCell = queueArray.shift();;
      const neighbourList = currentCell.neighbours;
      const currentCoordinates = `${currentCell.row}, ${currentCell.col}`;
      const neighbourCoords = [];
      
     
      adjacencyList.set(currentCoordinates, neighbourCoords);
      neighbourList.forEach((neighbour) => {
       
        const neighbourCoordinates = `${neighbour.row}, ${neighbour.col}`;
        if (!visited.has(neighbourCoordinates)) {
           const newNeighbour = getNeighbours([neighbour.row, neighbour.col]);
          neighbourCoords.push([neighbour.row, neighbour.col]);
          visited.add(neighbourCoordinates);
           queueArray.push(newNeighbour);
        }
      });
 
      
  
    if (currentCell.row === endRow && currentCell.col === endCol) {
      return adjacencyList;
    }
  
  }
 
};


console.log(visited)
  console.log(getNeighbours([3,3]))

createData([3,3],[5,7])



console.log(adjacencyList)

console.log(`%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%`)

console.log(visited)














