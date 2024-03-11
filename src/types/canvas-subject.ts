import { ICoordinates } from "./coordinates.ts";

export interface ICanvasSubject {
  getCoordinates(): ICoordinates[];
}
