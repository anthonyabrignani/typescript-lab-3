export abstract class Shape {
  constructor(public color: string) {}
  abstract getArea(): number;
}

export class Triangle extends Shape {
  constructor(
    public base: number,
    public height: number,
    color: string = "green"
  ) {
    super(color);
  }
  getArea(): number {
    return (this.base * this.height) / 2;
  }
}

export class Circle extends Shape {
  constructor(public radius: number, color: string = "red") {
    super(color);
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

export class Square extends Shape {
  constructor(public side: number, color: string = "orange") {
    super(color);
  }
  getArea(): number {
    return this.side * this.side;
  }
}

let shapes: Shape[] = [
  new Triangle(10, 5),
  new Circle(20),
  new Square(40),
  new Triangle(25, 15, "blue"),
  new Circle(5, "burgundy"),
  new Square(20, "burnt sienna"),
];

console.log(shapes);

let sum: number = 0;
for (let shape of shapes) {
  console.log(shape.getArea());
  sum += shape.getArea();
}

console.log("Sum:", sum);

console.log("Average:", sum / shapes.length);

let largest: Shape = shapes[0];
for (let shape of shapes) {
  if (shape.getArea() > largest.getArea()) {
    largest = shape;
  }
}

console.log("Largest:", largest, "Area:", largest.getArea());

shapes.sort((shapeA, shapeB) => {
  if (shapeA.getArea() < shapeB.getArea()) {
    return 1;
  } else if (shapeA.getArea() === shapeB.getArea()) {
    return 0;
  } else {
    return -1;
  }
});

console.log(shapes);
const result = shapes.filter((shape) => {
  shape.color === "orange";
});

console.log(result);

const squares = shapes.filter((shape) => {
  shape instanceof Square;
});

console.log(squares);