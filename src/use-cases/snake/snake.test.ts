import { Types } from "../../types";
import { Constants } from "../../constants";
import { SnakeCoordinates } from "../snake-coordinates";
import { Snake } from "./snake.ts";
import { EventEmitter } from "../event-emitter";

const eventEmitter = new EventEmitter();

describe("Class Snake", () => {
  it("should implement method 'moveByDirection' with 'Right' direction correctly", () => {
    const snakeCoordinates = new SnakeCoordinates([
      { x: 50, y: 10, direction: Types.Direction.Right },
      { x: 40, y: 10, direction: Types.Direction.Right },
      { x: 30, y: 10, direction: Types.Direction.Right },
      { x: 20, y: 10, direction: Types.Direction.Right },
      { x: 10, y: 10, direction: Types.Direction.Right },
    ]);
    const snake = new Snake({
      EventEmitter: eventEmitter,
      coordinates: snakeCoordinates,
      direction: Types.Direction.Right,
    });
    snake.moveByDirection();

    expect(snake.getCoordinates()).toEqual([
      { x: 50 + Constants.PIXEL_SIZE, y: 10, direction: Types.Direction.Right },
      { x: 50, y: 10, direction: Types.Direction.Right },
      { x: 40, y: 10, direction: Types.Direction.Right },
      { x: 30, y: 10, direction: Types.Direction.Right },
      { x: 20, y: 10, direction: Types.Direction.Right },
    ]);
  });

  it("should implement method 'moveByDirection' with 'Left' direction correctly", () => {
    const snakeCoordinates = new SnakeCoordinates([
      { x: 10, y: 10, direction: Types.Direction.Left },
      { x: 20, y: 10, direction: Types.Direction.Left },
      { x: 30, y: 10, direction: Types.Direction.Left },
      { x: 40, y: 10, direction: Types.Direction.Left },
      { x: 50, y: 10, direction: Types.Direction.Left },
    ]);
    const snake = new Snake({
      EventEmitter: eventEmitter,
      coordinates: snakeCoordinates,
      direction: Types.Direction.Left,
    });
    snake.moveByDirection();

    expect(snake.getCoordinates()).toEqual([
      { x: 10 - Constants.PIXEL_SIZE, y: 10, direction: Types.Direction.Left },
      { x: 10, y: 10, direction: Types.Direction.Left },
      { x: 20, y: 10, direction: Types.Direction.Left },
      { x: 30, y: 10, direction: Types.Direction.Left },
      { x: 40, y: 10, direction: Types.Direction.Left },
    ]);
  });

  it("should implement method 'moveByDirection' with 'Up' direction correctly", () => {
    const snakeCoordinates = new SnakeCoordinates([
      { x: 10, y: 10, direction: Types.Direction.Up },
      { x: 10, y: 20, direction: Types.Direction.Up },
      { x: 10, y: 30, direction: Types.Direction.Up },
      { x: 10, y: 40, direction: Types.Direction.Up },
      { x: 10, y: 50, direction: Types.Direction.Up },
    ]);
    const snake = new Snake({
      EventEmitter: eventEmitter,
      coordinates: snakeCoordinates,
      direction: Types.Direction.Up,
    });
    snake.moveByDirection();

    expect(snake.getCoordinates()).toEqual([
      { x: 10, y: 10 - Constants.PIXEL_SIZE, direction: Types.Direction.Up },
      { x: 10, y: 10, direction: Types.Direction.Up },
      { x: 10, y: 20, direction: Types.Direction.Up },
      { x: 10, y: 30, direction: Types.Direction.Up },
      { x: 10, y: 40, direction: Types.Direction.Up },
    ]);
  });

  it("should implement method 'moveByDirection' with 'Down' direction correctly", () => {
    const snakeCoordinates = new SnakeCoordinates([
      { x: 10, y: 50, direction: Types.Direction.Down },
      { x: 10, y: 40, direction: Types.Direction.Down },
      { x: 10, y: 30, direction: Types.Direction.Down },
      { x: 10, y: 20, direction: Types.Direction.Down },
      { x: 10, y: 10, direction: Types.Direction.Down },
    ]);
    const snake = new Snake({
      EventEmitter: eventEmitter,
      coordinates: snakeCoordinates,
      direction: Types.Direction.Down,
    });
    snake.moveByDirection();

    expect(snake.getCoordinates()).toEqual([
      { x: 10, y: 50 + Constants.PIXEL_SIZE, direction: Types.Direction.Down },
      { x: 10, y: 50, direction: Types.Direction.Down },
      { x: 10, y: 40, direction: Types.Direction.Down },
      { x: 10, y: 30, direction: Types.Direction.Down },
      { x: 10, y: 20, direction: Types.Direction.Down },
    ]);
  });

  it("should implement method 'increase' with 'Right' direction correctly", () => {
    const snakeCoordinates = new SnakeCoordinates([
      { x: 50, y: 10, direction: Types.Direction.Right },
      { x: 40, y: 10, direction: Types.Direction.Right },
      { x: 30, y: 10, direction: Types.Direction.Right },
      { x: 20, y: 10, direction: Types.Direction.Right },
      { x: 10, y: 10, direction: Types.Direction.Right },
    ]);
    const snake = new Snake({
      EventEmitter: eventEmitter,
      coordinates: snakeCoordinates,
      direction: Types.Direction.Right,
    });

    snake.increase();
    expect(snake.getCoordinates()).toEqual([
      { x: 50, y: 10, direction: Types.Direction.Right },
      { x: 40, y: 10, direction: Types.Direction.Right },
      { x: 30, y: 10, direction: Types.Direction.Right },
      { x: 20, y: 10, direction: Types.Direction.Right },
      { x: 10, y: 10, direction: Types.Direction.Right },
      { x: 0, y: 10, direction: Types.Direction.Right },
    ]);
  });

  it("should implement method 'increase' with 'Left' direction correctly", () => {
    const snakeCoordinates = new SnakeCoordinates([
      { x: 10, y: 10, direction: Types.Direction.Left },
      { x: 20, y: 10, direction: Types.Direction.Left },
      { x: 30, y: 10, direction: Types.Direction.Left },
      { x: 40, y: 10, direction: Types.Direction.Left },
      { x: 50, y: 10, direction: Types.Direction.Left },
    ]);

    const snake = new Snake({
      EventEmitter: eventEmitter,
      coordinates: snakeCoordinates,
      direction: Types.Direction.Left,
    });

    snake.increase();
    expect(snake.getCoordinates()).toEqual([
      { x: 10, y: 10, direction: Types.Direction.Left },
      { x: 20, y: 10, direction: Types.Direction.Left },
      { x: 30, y: 10, direction: Types.Direction.Left },
      { x: 40, y: 10, direction: Types.Direction.Left },
      { x: 50, y: 10, direction: Types.Direction.Left },
      { x: 60, y: 10, direction: Types.Direction.Left },
    ]);
  });

  it("should implement method 'increase' with 'Up' direction correctly", () => {
    const snakeCoordinates = new SnakeCoordinates([
      { x: 10, y: 10, direction: Types.Direction.Up },
      { x: 10, y: 20, direction: Types.Direction.Up },
      { x: 10, y: 30, direction: Types.Direction.Up },
      { x: 10, y: 40, direction: Types.Direction.Up },
      { x: 10, y: 50, direction: Types.Direction.Up },
    ]);

    const snake = new Snake({
      EventEmitter: eventEmitter,
      coordinates: snakeCoordinates,
      direction: Types.Direction.Up,
    });

    snake.increase();
    expect(snake.getCoordinates()).toEqual([
      { x: 10, y: 10, direction: Types.Direction.Up },
      { x: 10, y: 20, direction: Types.Direction.Up },
      { x: 10, y: 30, direction: Types.Direction.Up },
      { x: 10, y: 40, direction: Types.Direction.Up },
      { x: 10, y: 50, direction: Types.Direction.Up },
      { x: 10, y: 60, direction: Types.Direction.Up },
    ]);
  });

  it("should implement method 'increase' with 'Down' direction correctly", () => {
    const snakeCoordinates = new SnakeCoordinates([
      { x: 10, y: 50, direction: Types.Direction.Down },
      { x: 10, y: 40, direction: Types.Direction.Down },
      { x: 10, y: 30, direction: Types.Direction.Down },
      { x: 10, y: 20, direction: Types.Direction.Down },
      { x: 10, y: 10, direction: Types.Direction.Down },
    ]);

    const snake = new Snake({
      EventEmitter: eventEmitter,
      coordinates: snakeCoordinates,
      direction: Types.Direction.Down,
    });

    snake.increase();
    expect(snake.getCoordinates()).toEqual([
      { x: 10, y: 50, direction: Types.Direction.Down },
      { x: 10, y: 40, direction: Types.Direction.Down },
      { x: 10, y: 30, direction: Types.Direction.Down },
      { x: 10, y: 20, direction: Types.Direction.Down },
      { x: 10, y: 10, direction: Types.Direction.Down },
      { x: 10, y: 0, direction: Types.Direction.Down },
    ]);
  });
});
