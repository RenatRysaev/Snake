import { Types } from "../../types";
import { Domain } from "../../domain";
import { Constants } from "../../constants";

export class Food implements Domain.IFood {
  private coordinates: Types.ICoordinates[] = [];

  public getCoordinates(): Types.ICoordinates[] {
    return this.coordinates;
  }

  public generateNew = (excludeCoordinates: Types.ICoordinates[]): void => {
    const min = Constants.PIXEL_SIZE;
    const maxX = Constants.GAME_CANVAS_SIZE.width - Constants.PIXEL_SIZE;
    const maxY = Constants.GAME_CANVAS_SIZE.height - Constants.PIXEL_SIZE;

    const randomX = this.getRandomNumber(min, maxX);
    const randomY = this.getRandomNumber(min, maxY);

    const randomIsEqualToExclude = excludeCoordinates.some(
      (coordinates) => coordinates.x === randomX || coordinates.y === randomY,
    );

    if (randomIsEqualToExclude) {
      return this.generateNew(excludeCoordinates);
    }

    this.coordinates = [
      {
        x: randomX,
        y: randomY,
      },
    ];
  };

  private getRandomNumber = (min: number, max: number): number => {
    return (
      Math.round((Math.random() * (max - min) + min) / Constants.PIXEL_SIZE) *
      Constants.PIXEL_SIZE
    );
  };
}
