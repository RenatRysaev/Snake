import { Direction } from "./direction.ts";

export type PositionType = {
  x: number;
  y: number;
};

export type PositionLogType = PositionType & {
  direction: Direction;
};
