class Node {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.neighbours = new Set([]);
    this.coordinates = [row, col];
  }
}
const visited = new Set([])


//Get neighbours of square
const getNeighbours = ([row, col]) => {
  //End function if end coordinates match start coordinates (not working)
  // if (row == endRow && col == endCol) {
  //   return "-----------Game Over-----------------";
  // } else {
  //   //console.log to indicate function start
    
  // }
  //Make a node of initial square
  let start = new Node(row, col);
  //add it to 'visited' set
  visited.add(JSON.stringify([start.row, start.col]));

  //Don't allow numbers outside of 0-7 in coordinates
  const neighbourSet = new Set([]);
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
    coordModifiers.forEach(coord => {
      const newRow = row+coord[0];
      const newCol = col+coord[1];
      if(newRow >=0 && newRow <=7 && newCol >=0 && newCol <=7){
      const neighbour = new Node(newRow, newCol)
      start.neighbours.add(neighbour)
       const neighbourCoordinates = JSON.stringify([neighbour.row, neighbour.col]);
       neighbourSet.add(neighbourCoordinates);
         if (!visited.has(neighbourCoordinates)) {
          visited.add(neighbourCoordinates);
         }
      }
    })
  }

 ;
// console.log(`NEIGHBOURS: ${start.coordinates}`)
// console.log(start.neighbours)

 return start;
};


const bfs = ([row, col], [endRow, endCol]) => {
   //Make a node of initial square
  let start = getNeighbours([row, col]);
  //add it to 'visited' set
  visited.add(JSON.stringify([start.row, start.col]));
  const queueArray =[start];
//  console.log(queueArray)
  while(queueArray.length>=1){
    if(queueArray[0].row = endRow && queueArray[0].col === endCol){
      console.log(`---------------End----------------`)
      return
    }
    // console.log(`[0]:${queueArray[0]}`)
    // console.log(`row: ${queueArray[0].row}`)
    // console.log(`col: ${queueArray[0].col}`)
    
    // console.log(queueArray[0].coordinates)
    
    if(queueArray[0].neighbours !== null){

      const neighbourList = queueArray[0].neighbours
      // console.log(`QueueArray[0].neighbours`)
      // console.log(queueArray[0])
      
     neighbourList.forEach(neighbour => {

        const newNeighbour = getNeighbours([neighbour.row, neighbour.col])
        queueArray.push(newNeighbour)
      })
      console.log(`QueueArray:`)
      console.log(queueArray[0])
      // const listQueueArray = () => {
      //   queueArray.forEach(item=>{
      //     return item.row
      //   })
      // }
      // console.log(listQueueArray())
    } 
    queueArray.shift(queueArray[0])
  
  
    
  }
}

  

console.log(bfs([3,3],[7,7]))
// console.log(`VISITED`)
//   console.log(visited)

class Board{
    constructor(startRow, startCol, endRow, endCol){
        this.startRow = startRow;
        this.startCol = startCol;
        this.endRow = endRow;
        this.endCol = endCol;
        this.start = [startRow, startCol];
        this.end = [endRow, endCol];

    }
    #visited = new Set()

    renderMoves([startRow, startCol],[endRow, endCol]){

    }


}


class Tree {
  constructor(arr) {
    this.arr = this.arrayCleaner(arr);
    this.root = buildTree(this.arr);
  
  }
}



















