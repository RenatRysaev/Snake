import { Types } from "../../types";
import { SnakeCoordinates } from "./snake-coordinates.ts";

const initialSnakeCoordinates: Types.ICoordinates[] = [
  { x: 10, y: 10 },
  { x: 20, y: 10 },
  { x: 30, y: 10 },
  { x: 40, y: 10 },
  { x: 50, y: 10 },
];

describe("Class SnakeCoordinates:", () => {
  it("should implement method 'getItems' correctly", () => {
    const snakeCoordinates = new SnakeCoordinates(initialSnakeCoordinates);
    expect(snakeCoordinates.getItems()).toEqual(initialSnakeCoordinates);
  });

  it("should implement method 'head' correctly", () => {
    const snakeCoordinates = new SnakeCoordinates(initialSnakeCoordinates);
    expect(snakeCoordinates.head()).toEqual({ x: 10, y: 10 });
  });

  it("should implement method 'insertInHead' correctly", () => {
    const snakeCoordinates = new SnakeCoordinates(initialSnakeCoordinates);
    const itemToInsert = { x: 0, y: 0 };
    snakeCoordinates.insertInHead(itemToInsert);

    expect(snakeCoordinates.head()).toEqual(itemToInsert);
  });

  it("should implement method 'deleteLastItem' correctly", () => {
    const snakeCoordinates = new SnakeCoordinates(initialSnakeCoordinates);
    snakeCoordinates.deleteLastItem();

    expect(snakeCoordinates.getItems()).toEqual([
      { x: 10, y: 10 },
      { x: 20, y: 10 },
      { x: 30, y: 10 },
      { x: 40, y: 10 },
    ]);
  });
});
