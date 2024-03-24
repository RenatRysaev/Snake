import { Types } from "../types";

export interface IGameCanvas {
  render(payload: Types.Payload): void;
}
