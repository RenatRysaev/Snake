import { Types } from "../../types";
import { Domain } from "../../domain";

export class Snake implements Domain.ISnake {
  moveByDirection() {}
  changeDirection(direction: Types.Direction) {}

  increase() {}

  getCoordinates(): Types.ICoordinates {}
}
