function greet(person: string, date: Date) {
  console.log(`Hello, ${person}, today is ${date.toDateString()}`);
}

greet("John Doe", new Date());

function printCoord(pt: { x: number; y: number }) {
  console.log("Coordinate: "+ pt.x + ", " + pt.y);
}

//Improved handling using type assertion
const coord: {x:number; y: number} = {x: 3, y: 7};
printCoord(coord);

//Alternative using optional properties
function printCoordOptional(pt: { x?: number; y?: number }) {
  console.log(`Coordinate: ${pt.x ?? 'undefined'}, ${pt.y ?? 'undefined'}`);
}
printCoordOptional({x: 5});
printCoordOptional({});