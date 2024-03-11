import { Types } from "../../types";
import { Domain } from "../../domain";
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

  public moveByDirection() {}

  public changeDirection(direction: Types.Direction) {
    this.direction = direction;
  }

  public increase() {}

  public getCoordinates(): Types.ICoordinates[] {
    return this.coordinates.getItems();
  }
}
