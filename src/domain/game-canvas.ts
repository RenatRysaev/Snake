import { Types } from "../types";

export interface IGameCanvas {
  draw(figure: Types.ICanvasSubject): void;
}
