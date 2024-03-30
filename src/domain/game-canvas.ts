import { Types } from "../types";

export interface IGameCanvas {
  draw(coordinates: Types.ICoordinates[]): void;
  delete(coordinates: Types.ICoordinates): void;
}
