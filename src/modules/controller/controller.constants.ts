import { Shared } from "../../shared";

export const MAP_KEY_CODE_TO_SNAKE_DIRECTION: {
  [key: string]: Shared.Types.Direction;
} = {
  ArrowLeft: Shared.Types.Direction.Left,
  ArrowUp: Shared.Types.Direction.Top,
  ArrowRight: Shared.Types.Direction.Right,
  ArrowDown: Shared.Types.Direction.Bottom,
};
