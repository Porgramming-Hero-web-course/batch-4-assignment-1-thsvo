class Person {
  getArea() {}
}

class circleArea extends Person {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return parseFloat((Math.PI * this.radius * this.radius).toFixed(2));
  }
}

class Reactangle extends Person {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return this.height * this.width;
  }
}

const calculateShapeArea = new circleArea(5);
const calculateReactangleArea = new Reactangle(4, 6);
console.log(calculateShapeArea.getArea());
console.log(calculateReactangleArea.getArea());
