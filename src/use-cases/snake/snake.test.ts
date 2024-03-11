import { Types } from "../../types";
import { SnakeCoordinates } from "../snake-coordinates";
import { Constants } from "../../constants";
import { Snake } from "./snake.ts";

const initialSnakeCoordinates: Types.ICoordinates[] = [
  { x: 50, y: 10 },
  { x: 40, y: 10 },
  { x: 30, y: 10 },
  { x: 20, y: 10 },
  { x: 10, y: 10 },
];

describe("Class Snake", () => {
  it("should implement method 'moveByDirection' correctly", () => {
    const snakeCoordinates = new SnakeCoordinates(initialSnakeCoordinates);
    const snake = new Snake({
      coordinates: snakeCoordinates,
      direction: Types.Direction.Right,
    });
    snake.moveByDirection();

    expect(snake.getCoordinates()).toEqual([
      { x: 50 + Constants.PIXEL_SIZE, y: 10 },
      { x: 50, y: 10 },
      { x: 40, y: 10 },
      { x: 30, y: 10 },
      { x: 20, y: 10 },
    ]);
  });

  it("should implement method 'moveByDirection' with 'changeDirection' correctly", () => {
    const snakeCoordinates = new SnakeCoordinates(initialSnakeCoordinates);
    const snake = new Snake({
      coordinates: snakeCoordinates,
      direction: Types.Direction.Right,
    });

    snake.moveByDirection();
    expect(snake.getCoordinates()).toEqual([
      { x: 50 + Constants.PIXEL_SIZE, y: 10 },
      { x: 50, y: 10 },
      { x: 40, y: 10 },
      { x: 30, y: 10 },
      { x: 20, y: 10 },
    ]);

    snake.changeDirection(Types.Direction.Bottom);
    snake.moveByDirection();
    expect(snake.getCoordinates()).toEqual([
      { x: 50 + Constants.PIXEL_SIZE, y: 10 + Constants.PIXEL_SIZE },
      { x: 50 + Constants.PIXEL_SIZE, y: 10 },
      { x: 50, y: 10 },
      { x: 40, y: 10 },
      { x: 30, y: 10 },
    ]);

    snake.changeDirection(Types.Direction.Right);
    snake.moveByDirection();

    expect(snake.getCoordinates()).toEqual([
      { x: 50 + Constants.PIXEL_SIZE * 2, y: 10 + Constants.PIXEL_SIZE },
      { x: 50 + Constants.PIXEL_SIZE, y: 10 + Constants.PIXEL_SIZE },
      { x: 50 + Constants.PIXEL_SIZE, y: 10 },
      { x: 50, y: 10 },
      { x: 40, y: 10 },
    ]);
  });
});
