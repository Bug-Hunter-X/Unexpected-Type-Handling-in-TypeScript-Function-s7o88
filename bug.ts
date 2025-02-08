function greet(person: string, date: Date) {
  console.log(`Hello, ${person}, today is ${date.toDateString()}`);
}

greet("John Doe", new Date());

function printCoord(pt: { x: number; y: number }) {
  console.log("Coordinate: "+ pt.x + ", " + pt.y);
}

printCoord({ x: 3, y: 7 });