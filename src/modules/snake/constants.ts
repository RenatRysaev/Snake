import { Shared } from "../../shared";

export const oppositeDirections = new Map<
  Shared.Types.Direction,
  Shared.Types.Direction
>([
  [Shared.Types.Direction.Top, Shared.Types.Direction.Bottom],
  [Shared.Types.Direction.Bottom, Shared.Types.Direction.Top],
  [Shared.Types.Direction.Left, Shared.Types.Direction.Right],
  [Shared.Types.Direction.Right, Shared.Types.Direction.Left],
]);
