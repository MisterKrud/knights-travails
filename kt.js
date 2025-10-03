
const masterArray = []


class Node{
  constructor(row, col, distanceFromStart){
    this.row = row;
    this.col = col;
    this.distanceFromStart = distanceFromStart;
  }

}
let n=0
const visited = new Set([])

//find neighbouring nodes - this needs purging of unnecessary elements
const knightMove = ([row, col], [lastRow, lastCol]) => {

  console.log(`knightMove`)
  
    if(row<0||row>7||row===undefined || col === undefined || col>7 || col===undefined){
        throw new Error("2 coordinates between 0 & 7 required")
    }
// const destinations = []
const coordModifiers = [[-1, 1], [-2, 2]]
// const adjacencyList =[]
// const adjList = []


const coordLinks = []
const startPosition = new Node(row, col, n)


    coordModifiers[0].forEach(a => {
       coordModifiers[1].forEach(b => {
      
        // console.log(`current elements:`)
        //     console.log(`row: ${row}, col: ${col}`)
        //     console.log(`lastRow: ${lastRow}, lastCol: ${lastCol} `)
        //     console.log(`a: ${a}, b: ${b}`)
        if((row+a)>=0 && (row+a<=7) && (col+b)>=0 && (col+b)<=7){
          const newRow = row+a;
        const newCol = col+b
          //  destinations.push([newRow, newCol])
          //  coordLinks.push([newRow, newCol])
           
          
      
          //   for(let i= adjacencyList.length-1; i<=row+a; i++){
          //       adjacencyList.push([])

          //   }
          
            const neighbour = new Node(newRow, newCol)
           
            const neighbourCoordinates = (JSON.stringify([neighbour.row,neighbour.col]))
            
           if(!visited.has(neighbourCoordinates)){
            visited.add(neighbourCoordinates)
           
             console.log(`Neighbour of: [${row},${col}] -- [${newRow},${newCol}]`)
              
            knightMove([newRow, newCol], [lastRow, lastCol])
           
           } 

           if(neighbour.row === lastRow && neighbour.col === lastCol){
            console.log(`Found: ${[lastRow, lastCol]}`)
           }           
          //  adjacencyList[newRow].push(newCol)
          //  knightMove([newRow, newCol], [lastRow, lastCol])
        }
         if((col+a)>=0 && (col+a<=7) && (row+b)>=0 && (row+b)<=7){
           const newRow = row+b;
        const newCol = col+a
          //  destinations.push([newRow, newCol])
          //  coordLinks.push([newRow, newCol])
           
        
            // for(let i= adjacencyList.length-1; i<=row+b; i++){
            //     adjacencyList.push([])
               
            //                   }
          // console.log(`current elements (b,a):`)
          //   console.log(`row: ${row}, col: ${col}`)
          //   console.log(`lastRow: ${lastRow}, lastCol: ${lastCol} `)
          //   console.log(`a: ${a}, b: ${b}`)
           const neighbour = new Node(newRow, newCol, n+1)
           
            const neighbourCoordinates = (JSON.stringify([neighbour.row,neighbour.col]))
            
           if(!visited.has(neighbourCoordinates)){
            visited.add(neighbourCoordinates)
            
            knightMove([newRow, newCol], [lastRow, lastCol])
          
           } 
            if(newRow === lastRow && newCol === lastCol){
          console.log(`Found: ${[lastRow, lastCol]}: ${n}`)
           }     
          //  adjacencyList[newRow].push(newCol)  
         
          }
           
        })
       
    })

   masterArray.push([[row, col], coordLinks])
   
    // if(!visited.has([lastRow,lastCol])){

    // }

// return {destinations, adjacencyList, adjList}



}

console.log(knightMove([3,3], [5,3]))

//  const visitNeighbours = () => {

//  }

// console.log(visited)
// console.log(knightMove.destinations)



