import { Shared } from "../../shared";

export const createKey = (coordinates: Shared.Types.PositionType): string =>
  `${coordinates.x}-${coordinates.y}`;
