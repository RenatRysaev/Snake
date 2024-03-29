import { Types } from "../../types";
import { Constants } from "../../constants";
import { Food } from "./food.ts";

describe("Class Food", () => {
  it(`food coordinates should multiples of pixel size(${Constants.PIXEL_SIZE})`, () => {
    const food = new Food();
    const snakeCoordinates: Types.ICoordinates[] = [
      { x: 10, y: 10 },
      { x: 20, y: 10 },
      { x: 30, y: 10 },
      { x: 40, y: 10 },
      { x: 50, y: 10 },
    ];
    food.generateNew(snakeCoordinates);

    const isCoordinatesContainNumbersWhichNotMultiplePixelSize = food
      .getCoordinates()
      .some(
        (coordinates) =>
          coordinates.x % Constants.PIXEL_SIZE !== 0 ||
          coordinates.y % Constants.PIXEL_SIZE !== 0,
      );

    expect(isCoordinatesContainNumbersWhichNotMultiplePixelSize).toEqual(false);
  });

  it("food coordinates should not contain snake coordinates", () => {
    const food = new Food();
    const snakeCoordinates: Types.ICoordinates[] = [
      { x: 10, y: 10 },
      { x: 20, y: 10 },
      { x: 30, y: 10 },
      { x: 40, y: 10 },
      { x: 50, y: 10 },
    ];
    food.generateNew(snakeCoordinates);

    expect(food.getCoordinates()).not.toEqual(
      expect.arrayContaining(snakeCoordinates),
    );
  });
});
