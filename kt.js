


const knightMove = (coord1, coord2) => {
    if(coord1<0||coord1>7||coord1===undefined || coord2 === undefined || coord2>7 || coord2===undefined){
        throw new Error("2 coordinates between 0 & 7 required")
    }
const destinations = []
const coordModifiers = [[-1, 1], [-2, 2]]
const adjacencyList =[]
const adjList = {}
const coords = [coord1,coord2]



const myObject = { existing: "value" };
const propertiesToAdd = { newKey1: "value1", newKey2: "value2" };

const updatedObject = Object.assign({}, myObject, propertiesToAdd);
console.log(updatedObject); // Output: { existing: 'value', newKey1: 'value1', newKey2: 'value2' }

// Or directly modify the original object:
Object.assign(myObject, propertiesToAdd);
console.log(myObject); // Output: { existing: 'value', newKey1: 'value1', newKey2: 'value2' }


    coordModifiers[0].forEach(a => {
       coordModifiers[1].forEach(b => {
       
        if((coord1+a)>=0 && (coord1+a<=7) && (coord2+b)>=0 && (coord2+b)<=7){
           destinations.push([coord1+a, coord2+b])
           Object.assign(adjList, {coords: [coord1+a, coord2+b]})
        //    if(!adjacencyList[coord1+a]){
            for(let i= adjacencyList.length-1; i<=coord1+a; i++){
                adjacencyList.push([])

            }
           
           adjacencyList[coord1+a].push(coord2+b)
        }
         if((coord2+a)>=0 && (coord2+a<=7) && (coord1+b)>=0 && (coord1+b)<=7){
           destinations.push([coord1+b, coord2+a])
            adjList.coords = [coord1+b, coord2+a]
        
            for(let i= adjacencyList.length-1; i<=coord1+b; i++){
                adjacencyList.push([])
               
                              }
           
           adjacencyList[coord1+b].push(coord2+a)  }
        })
    })

    // const square = new Link(coord1, coord2)
   

return {destinations, adjacencyList, adjList}



}



console.log(knightMove(3,3))



const levelOrderForEach =(callback, node) =>{
    const queueArray = [node]

    if (callback === undefined) {
      throw new Error("Argument must contain a function")

    } else {

      while (queueArray.length >= 1) {

        callback(queueArray[0])

        if (queueArray[0].left !== null && queueArray[0].right !== null) {
          queueArray.push(queueArray[0].left, queueArray[0].right);

        } else if (queueArray[0].left !== null && queueArray[0].right === null) {
            queueArray.push(queueArray[0].left)

          } else if (queueArray[0].right !== null && queueArray[0].left === null) {
              queueArray.push(queueArray[0].right)
            }

        queueArray.shift(queueArray[0])

      }
    }
  }

  class Graph {
    constructor(square){
        this.square = square
        this.linkArray = knightMove(square[0], square[1]).adjacencyList
    }
  }

  class Link {
    constructor(coords) {
        this.coords = coords;
        this.link1= null;
        this.link3 = null;
        this.link4 = null;
        this.link5=null;
        this.link6=null;
        this.link7=null;
        this.link8=null

    }
  }