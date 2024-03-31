import { Types } from "../types";

export interface ISnake {
  moveByDirection(): void;
  changeDirection(direction: Types.Direction): void;
  increase(): void;
  getCoordinates(): Types.ICoordinatesWithDirection[];
}
