import {Triangle, Circle, Square} from "./practice";

describe("Triangle class", () => {
    test.skip("base and height are set from constructor params", () => {
        let tri: Triangle = new Triangle(10, 5);
        expect(tri.base).toBe(10);
        expect(tri.height).toBe(5);
    });
    test.skip("getArea calc", () => {
        let tri: Triangle = new Triangle(20, 30);
        expect(tri.getArea()).toBe(300);
    });
});

describe("Circle class", () => {
    test.skip("radius is set from constructor params", () => {
        let cir: Circle = new Circle(5);
        expect(cir.radius).toBe(5);
    });
    test.skip("getArea calc", () => {
        let cir: Circle = new Circle(10)
        expect(cir.getArea()).toBeCloseTo(314, 0);
    });
});

describe("Square class", () => {
    test.skip("side is set from constructor params", () => {
        let squ: Square = new Square(50);
        expect(squ.side).toBe(50);
    });
    test.skip("getArea calc", () => {
        let squ: Square = new Square(10)
        expect(squ.getArea()).toBe(100);
    });
});