import { Types } from "../types";

export interface ISnake extends Types.ICanvasSubject {
  moveByDirection(): void;
  changeDirection(direction: Types.Direction): void;
  increase(): void;
}
