import { Shared } from "../../shared";

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

    const randomX = this.getRandomNumber(min, maxX);
    const randomY = this.getRandomNumber(min, maxY);

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

  private getRandomNumber = (min: number, max: number): number => {
    return (
      Math.round(
        (Math.random() * (max - min) + min) / Shared.Constants.PIXEL_SIZE,
      ) * Shared.Constants.PIXEL_SIZE
    );
  };
}
