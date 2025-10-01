const knightMove = (coord1, coord2) => {
    if(coord1<0||coord1>7||coord1===undefined || coord2 === undefined || coord2>7 || coord2===undefined){
        throw new Error("2 coordinates between 0 & 7 required")
    }
const destinations = []
const coordModifiers = [[-1, 1], [-2, 2]]

    coordModifiers[0].forEach(a => {
       coordModifiers[1].forEach(b => {
        if((coord1+a)>=0 && (coord1+a<=7) && (coord2+b)>=0 && (coord2+b)<=7){
           destinations.push([coord1+a, coord2+b])
        }
         if((coord2+a)>=0 && (coord2+a<=7) && (coord1+b)>=0 && (coord1+b)<=7){
           destinations.push([coord1+b, coord2+a])
         }
        })
    })


return destinations



}

console.log(knightMove(2,7))