import { Direction } from "./direction";

export type PositionType = {
  x: number;
  y: number;
};

export type PositionLogType = PositionType & {
  direction: Direction;
};
