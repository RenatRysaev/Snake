import { Types } from "../../types";
import { Domain } from "../../domain";
import { Constants } from "../../constants";
import { ISnakeCoordinates } from "../snake-coordinates";

type Props = {
  coordinates: ISnakeCoordinates;
  direction: Types.Direction;
};

export class Snake implements Domain.ISnake {
  private coordinates: ISnakeCoordinates;
  private direction: Types.Direction;

  constructor(props: Props) {
    this.coordinates = props.coordinates;
    this.direction = props.direction;
  }

  public moveByDirection() {
    this.coordinates.insertInHead(this.createCoordinatesForMove());
    this.coordinates.deleteLastItem();
  }

  public changeDirection(direction: Types.Direction) {
    this.direction = direction;
  }

  public increase() {
    this.coordinates.insertInEnd(this.createCoordinatesForIncrease());
  }

  public getCoordinates(): Types.ICoordinates[] {
    return this.coordinates.getItems();
  }

  private createCoordinatesForMove = (): Types.ICoordinatesWithDirection => {
    const currentHeadCoordinates = this.coordinates.head();
    let newHeadCoordinates: Types.ICoordinatesWithDirection | null = null;

    if (this.direction === Types.Direction.Right) {
      newHeadCoordinates = {
        x: currentHeadCoordinates.x + Constants.PIXEL_SIZE,
        y: currentHeadCoordinates.y,
        direction: Types.Direction.Right,
      };
    }

    if (this.direction === Types.Direction.Left) {
      newHeadCoordinates = {
        x: currentHeadCoordinates.x - Constants.PIXEL_SIZE,
        y: currentHeadCoordinates.y,
        direction: Types.Direction.Left,
      };
    }

    if (this.direction === Types.Direction.Top) {
      newHeadCoordinates = {
        x: currentHeadCoordinates.x,
        y: currentHeadCoordinates.y - Constants.PIXEL_SIZE,
        direction: Types.Direction.Top,
      };
    }

    if (this.direction === Types.Direction.Bottom) {
      newHeadCoordinates = {
        x: currentHeadCoordinates.x,
        y: currentHeadCoordinates.y + Constants.PIXEL_SIZE,
        direction: Types.Direction.Bottom,
      };
    }

    return newHeadCoordinates as Types.ICoordinatesWithDirection;
  };

  private createCoordinatesForIncrease =
    (): Types.ICoordinatesWithDirection => {
      const currentEndCoordinates = this.coordinates.end();
      let coordinatesForIncrease: Types.ICoordinatesWithDirection | null = null;

      if (currentEndCoordinates.direction === Types.Direction.Right) {
        coordinatesForIncrease = {
          x: currentEndCoordinates.x - Constants.PIXEL_SIZE,
          y: currentEndCoordinates.y,
          direction: Types.Direction.Right,
        };
      }

      if (currentEndCoordinates.direction === Types.Direction.Left) {
        coordinatesForIncrease = {
          x: currentEndCoordinates.x + Constants.PIXEL_SIZE,
          y: currentEndCoordinates.y,
          direction: Types.Direction.Left,
        };
      }

      if (currentEndCoordinates.direction === Types.Direction.Top) {
        coordinatesForIncrease = {
          x: currentEndCoordinates.x,
          y: currentEndCoordinates.y + Constants.PIXEL_SIZE,
          direction: Types.Direction.Top,
        };
      }

      if (currentEndCoordinates.direction === Types.Direction.Bottom) {
        coordinatesForIncrease = {
          x: currentEndCoordinates.x,
          y: currentEndCoordinates.y - Constants.PIXEL_SIZE,
          direction: Types.Direction.Bottom,
        };
      }

      return coordinatesForIncrease as Types.ICoordinatesWithDirection;
    };
}
