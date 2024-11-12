import { Shared } from "../../shared";
import { SnakeDataStructure } from "./snake-data-structure.ts";

type Props = {
  direction: Shared.Types.Direction;
  coordinates: Shared.Types.PositionLogType[];
};

export class SnakeEngine {
  private snakeDataStructure: SnakeDataStructure;
  private direction: Shared.Types.Direction;

  constructor(props: Props) {
    this.snakeDataStructure = new SnakeDataStructure({
      items: props.coordinates,
    });
    this.direction = props.direction;
  }

  public setDirection = (direction: Shared.Types.Direction): void => {
    this.direction = direction;
  };

  public getDirection = (): Shared.Types.Direction => {
    return this.direction;
  };

  public move = (): void => {
    const positionToMove = this.createNewHeadPositionToMove();
    this.snakeDataStructure.insertInHead(positionToMove);
    this.snakeDataStructure.deleteLastItem();
  };

  public increase = (): void => {
    const positionToIncrease = this.createNewEndPositionToIncrease();
    this.snakeDataStructure.insertInEnd(positionToIncrease);
  };

  public getCoordinates = (): Shared.Types.PositionLogType[] => {
    return this.snakeDataStructure.getItems();
  };

  private createNewHeadPositionToMove = (): Shared.Types.PositionLogType => {
    const currentHeadPosition = this.snakeDataStructure.getHead();
    let newHeadPosition: Shared.Types.PositionLogType = currentHeadPosition;

    if (this.direction === Shared.Types.Direction.Right) {
      newHeadPosition = {
        x: currentHeadPosition.x + Shared.Constants.PIXEL_SIZE,
        y: currentHeadPosition.y,
        direction: Shared.Types.Direction.Right,
      };
    }

    if (this.direction === Shared.Types.Direction.Left) {
      newHeadPosition = {
        x: currentHeadPosition.x - Shared.Constants.PIXEL_SIZE,
        y: currentHeadPosition.y,
        direction: Shared.Types.Direction.Left,
      };
    }

    if (this.direction === Shared.Types.Direction.Top) {
      newHeadPosition = {
        x: currentHeadPosition.x,
        y: currentHeadPosition.y - Shared.Constants.PIXEL_SIZE,
        direction: Shared.Types.Direction.Top,
      };
    }

    if (this.direction === Shared.Types.Direction.Bottom) {
      newHeadPosition = {
        x: currentHeadPosition.x,
        y: currentHeadPosition.y + Shared.Constants.PIXEL_SIZE,
        direction: Shared.Types.Direction.Bottom,
      };
    }

    return newHeadPosition;
  };

  private createNewEndPositionToIncrease = (): Shared.Types.PositionLogType => {
    const currentEndPosition = this.snakeDataStructure.getEnd();
    let newEndPosition: Shared.Types.PositionLogType = currentEndPosition;

    if (currentEndPosition.direction === Shared.Types.Direction.Right) {
      newEndPosition = {
        x: currentEndPosition.x - Shared.Constants.PIXEL_SIZE,
        y: currentEndPosition.y,
        direction: Shared.Types.Direction.Right,
      };
    }

    if (currentEndPosition.direction === Shared.Types.Direction.Left) {
      newEndPosition = {
        x: currentEndPosition.x + Shared.Constants.PIXEL_SIZE,
        y: currentEndPosition.y,
        direction: Shared.Types.Direction.Left,
      };
    }

    if (currentEndPosition.direction === Shared.Types.Direction.Top) {
      newEndPosition = {
        x: currentEndPosition.x,
        y: currentEndPosition.y + Shared.Constants.PIXEL_SIZE,
        direction: Shared.Types.Direction.Top,
      };
    }

    if (currentEndPosition.direction === Shared.Types.Direction.Bottom) {
      newEndPosition = {
        x: currentEndPosition.x,
        y: currentEndPosition.y - Shared.Constants.PIXEL_SIZE,
        direction: Shared.Types.Direction.Bottom,
      };
    }

    return newEndPosition;
  };
}
