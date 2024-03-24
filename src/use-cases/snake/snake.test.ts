import { Types } from "../../types";
import { SnakeCoordinates } from "../snake-coordinates";
import { Constants } from "../../constants";
import { Snake } from "./snake.ts";
import { Direction } from "../../types/direction.ts";

describe("Class Snake", () => {
  it("should implement method 'moveByDirection' with 'Right' direction correctly", () => {
    const snakeCoordinates = new SnakeCoordinates([
      { x: 50, y: 10, direction: Direction.Right },
      { x: 40, y: 10, direction: Direction.Right },
      { x: 30, y: 10, direction: Direction.Right },
      { x: 20, y: 10, direction: Direction.Right },
      { x: 10, y: 10, direction: Direction.Right },
    ]);
    const snake = new Snake({
      coordinates: snakeCoordinates,
      direction: Types.Direction.Right,
    });
    snake.moveByDirection();

    expect(snake.getCoordinates()).toEqual([
      { x: 50 + Constants.PIXEL_SIZE, y: 10, direction: Direction.Right },
      { x: 50, y: 10, direction: Direction.Right },
      { x: 40, y: 10, direction: Direction.Right },
      { x: 30, y: 10, direction: Direction.Right },
      { x: 20, y: 10, direction: Direction.Right },
    ]);
  });

  it("should implement method 'moveByDirection' with 'Left' direction correctly", () => {
    const snakeCoordinates = new SnakeCoordinates([
      { x: 10, y: 10, direction: Direction.Left },
      { x: 20, y: 10, direction: Direction.Left },
      { x: 30, y: 10, direction: Direction.Left },
      { x: 40, y: 10, direction: Direction.Left },
      { x: 50, y: 10, direction: Direction.Left },
    ]);
    const snake = new Snake({
      coordinates: snakeCoordinates,
      direction: Types.Direction.Left,
    });
    snake.moveByDirection();

    expect(snake.getCoordinates()).toEqual([
      { x: 10 - Constants.PIXEL_SIZE, y: 10, direction: Direction.Left },
      { x: 10, y: 10, direction: Direction.Left },
      { x: 20, y: 10, direction: Direction.Left },
      { x: 30, y: 10, direction: Direction.Left },
      { x: 40, y: 10, direction: Direction.Left },
    ]);
  });

  it("should implement method 'moveByDirection' with 'Top' direction correctly", () => {
    const snakeCoordinates = new SnakeCoordinates([
      { x: 10, y: 10, direction: Direction.Top },
      { x: 10, y: 20, direction: Direction.Top },
      { x: 10, y: 30, direction: Direction.Top },
      { x: 10, y: 40, direction: Direction.Top },
      { x: 10, y: 50, direction: Direction.Top },
    ]);
    const snake = new Snake({
      coordinates: snakeCoordinates,
      direction: Types.Direction.Top,
    });
    snake.moveByDirection();

    expect(snake.getCoordinates()).toEqual([
      { x: 10, y: 10 - Constants.PIXEL_SIZE, direction: Direction.Top },
      { x: 10, y: 10, direction: Direction.Top },
      { x: 10, y: 20, direction: Direction.Top },
      { x: 10, y: 30, direction: Direction.Top },
      { x: 10, y: 40, direction: Direction.Top },
    ]);
  });

  it("should implement method 'moveByDirection' with 'Bottom' direction correctly", () => {
    const snakeCoordinates = new SnakeCoordinates([
      { x: 10, y: 50, direction: Direction.Bottom },
      { x: 10, y: 40, direction: Direction.Bottom },
      { x: 10, y: 30, direction: Direction.Bottom },
      { x: 10, y: 20, direction: Direction.Bottom },
      { x: 10, y: 10, direction: Direction.Bottom },
    ]);
    const snake = new Snake({
      coordinates: snakeCoordinates,
      direction: Types.Direction.Bottom,
    });
    snake.moveByDirection();

    expect(snake.getCoordinates()).toEqual([
      { x: 10, y: 50 + Constants.PIXEL_SIZE, direction: Direction.Bottom },
      { x: 10, y: 50, direction: Direction.Bottom },
      { x: 10, y: 40, direction: Direction.Bottom },
      { x: 10, y: 30, direction: Direction.Bottom },
      { x: 10, y: 20, direction: Direction.Bottom },
    ]);
  });

  it("should implement method 'increase' with 'Right' direction correctly", () => {
    const snakeCoordinates = new SnakeCoordinates([
      { x: 50, y: 10, direction: Direction.Right },
      { x: 40, y: 10, direction: Direction.Right },
      { x: 30, y: 10, direction: Direction.Right },
      { x: 20, y: 10, direction: Direction.Right },
      { x: 10, y: 10, direction: Direction.Right },
    ]);
    const snake = new Snake({
      coordinates: snakeCoordinates,
      direction: Types.Direction.Right,
    });

    snake.increase();
    expect(snake.getCoordinates()).toEqual([
      { x: 50, y: 10, direction: Direction.Right },
      { x: 40, y: 10, direction: Direction.Right },
      { x: 30, y: 10, direction: Direction.Right },
      { x: 20, y: 10, direction: Direction.Right },
      { x: 10, y: 10, direction: Direction.Right },
      { x: 0, y: 10, direction: Direction.Right },
    ]);
  });

  it("should implement method 'increase' with 'Left' direction correctly", () => {
    const snakeCoordinates = new SnakeCoordinates([
      { x: 10, y: 10, direction: Direction.Left },
      { x: 20, y: 10, direction: Direction.Left },
      { x: 30, y: 10, direction: Direction.Left },
      { x: 40, y: 10, direction: Direction.Left },
      { x: 50, y: 10, direction: Direction.Left },
    ]);

    const snake = new Snake({
      coordinates: snakeCoordinates,
      direction: Types.Direction.Left,
    });

    snake.increase();
    expect(snake.getCoordinates()).toEqual([
      { x: 10, y: 10, direction: Direction.Left },
      { x: 20, y: 10, direction: Direction.Left },
      { x: 30, y: 10, direction: Direction.Left },
      { x: 40, y: 10, direction: Direction.Left },
      { x: 50, y: 10, direction: Direction.Left },
      { x: 60, y: 10, direction: Direction.Left },
    ]);
  });

  it("should implement method 'increase' with 'Top' direction correctly", () => {
    const snakeCoordinates = new SnakeCoordinates([
      { x: 10, y: 10, direction: Direction.Top },
      { x: 10, y: 20, direction: Direction.Top },
      { x: 10, y: 30, direction: Direction.Top },
      { x: 10, y: 40, direction: Direction.Top },
      { x: 10, y: 50, direction: Direction.Top },
    ]);

    const snake = new Snake({
      coordinates: snakeCoordinates,
      direction: Types.Direction.Top,
    });

    snake.increase();
    expect(snake.getCoordinates()).toEqual([
      { x: 10, y: 10, direction: Direction.Top },
      { x: 10, y: 20, direction: Direction.Top },
      { x: 10, y: 30, direction: Direction.Top },
      { x: 10, y: 40, direction: Direction.Top },
      { x: 10, y: 50, direction: Direction.Top },
      { x: 10, y: 60, direction: Direction.Top },
    ]);
  });

  it("should implement method 'increase' with 'Bottom' direction correctly", () => {
    const snakeCoordinates = new SnakeCoordinates([
      { x: 10, y: 50, direction: Direction.Bottom },
      { x: 10, y: 40, direction: Direction.Bottom },
      { x: 10, y: 30, direction: Direction.Bottom },
      { x: 10, y: 20, direction: Direction.Bottom },
      { x: 10, y: 10, direction: Direction.Bottom },
    ]);

    const snake = new Snake({
      coordinates: snakeCoordinates,
      direction: Types.Direction.Bottom,
    });

    snake.increase();
    expect(snake.getCoordinates()).toEqual([
      { x: 10, y: 50, direction: Direction.Bottom },
      { x: 10, y: 40, direction: Direction.Bottom },
      { x: 10, y: 30, direction: Direction.Bottom },
      { x: 10, y: 20, direction: Direction.Bottom },
      { x: 10, y: 10, direction: Direction.Bottom },
      { x: 10, y: 0, direction: Direction.Bottom },
    ]);
  });
});
