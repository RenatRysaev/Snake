import { ICoordinates } from "./coordinates.ts";
import { Direction } from "./direction.ts";

export interface ICoordinatesWithDirection extends ICoordinates {
  direction: Direction;
}
