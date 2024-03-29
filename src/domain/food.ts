import { Types } from "../types";

export interface IFood extends Types.ICanvasSubject {
  generateNew(excludeCoordinates: Types.ICoordinates[]): void;
}
