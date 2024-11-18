import { Shared } from "../../shared";
import * as Utils from "./utils.ts";

type CreateProps = {
  forbiddenCoordinates: Shared.Types.PositionType[];
};

export class Food {
  private coordinates: Shared.Types.PositionType | null = null;

  public hasCoordinates = (): boolean => Boolean(this.coordinates);

  public getCoordinates = (): Shared.Types.PositionType => {
    if (!this.coordinates) {
      throw new Error("Food.getCoordinates: Coordinates must be settled");
    }

    return this.coordinates;
  };

  public generate = ({ forbiddenCoordinates }: CreateProps): void => {
    const min = Shared.Constants.PIXEL_SIZE;
    const maxX =
      Shared.Constants.GAME_CANVAS_SIZE.width - Shared.Constants.PIXEL_SIZE;
    const maxY =
      Shared.Constants.GAME_CANVAS_SIZE.height - Shared.Constants.PIXEL_SIZE;

    const randomX = Utils.getRandomNumber(min, maxX);
    const randomY = Utils.getRandomNumber(min, maxY);

    const randomIsEqualToForbidden = forbiddenCoordinates.some(
      (coordinates) => coordinates.x === randomX || coordinates.y === randomY,
    );

    if (randomIsEqualToForbidden) {
      return this.generate({ forbiddenCoordinates });
    }

    this.coordinates = {
      x: randomX,
      y: randomY,
    };
  };

  public remove = (): void => {
    this.coordinates = null;
  };
}
